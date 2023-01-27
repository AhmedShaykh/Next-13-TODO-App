"use client"
import { ChangeEvent, FC, useState } from 'react';
import {
    Button,
    Flex,
    Heading,
    Input
} from '@chakra-ui/react';
import TodoList from './TodoList';
import { Todo } from './Types';

const Main: FC = () => {

    const [input, setInput] = useState<string>("");

    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 0,
            title: "Learning Jamstack",
            complete: true
        },
        {
            id: 1,
            title: "Learning Serverless API's",
            complete: false
        },
    ]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    };

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const newTodos = [...todos, {
            id: Math.random(),
            title: input,
            complete: false
        }];

        setTodos(newTodos);
        setInput("");
    };

    const onToggle = (id: number): void => {

        const updateTodos = todos.map(todo => {

            if (todo.id === id) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            };

            return todo;
        });

        setTodos(updateTodos);
    };

    const onDelete = (id: number): void => {

        const deleteTodos = todos.filter((todo) => todo.id !== id);
        setTodos(deleteTodos);

    };

    return (
        <>
            <Flex
                as="form"
                w="full"
                h="100vh"
                maxW="xl"
                mx="auto"
                alignItems="center"
                flexDirection="column"
                onSubmit={handleSubmit}
            >
                <Heading
                    mt="10"
                    mb="8"
                    as='h1'
                    fontSize='5xl'
                    fontWeight='extrabold'
                    bgGradient='linear(to-l, #0033ff, #0afffb)'
                    bgClip='text'
                >
                    Todo Application
                </Heading>
                <Input
                    color="white"
                    placeholder="Enter A Task..."
                    value={input}
                    onChange={handleChange}
                />
                <Button
                    w="full"
                    mt="4"
                    type="submit"
                    colorScheme="cyan"
                    color="white"
                >
                    Add Todo
                </Button>

                <Flex
                    color="white"
                    w="full"
                    flexDirection="column"
                    mt='5'
                >
                    {todos.map((todo) => (
                        <TodoList
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            complete={todo.complete}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))}
                </Flex>
            </Flex>
        </>
    )
};

export default Main;