"use client"
import { ChangeEvent, FC, useState } from 'react';
import {
    Button,
    Flex,
    Heading,
    Input
} from '@chakra-ui/react';
import TodoList from './TodoList';
import { Todos } from './Types';

const Main: FC = () => {

    const [input, setInput] = useState<string>("");

    const [todos, setTodos] = useState<Todos[]>([
        {
            title: "Data",
            complete: false
        },
        {
            title: "TypeData",
            complete: false
        },
    ]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    };

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const newTodos = [...todos, {
            title: input,
            complete: false
        }];

        setTodos(newTodos);
        setInput("");
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
                    {todos.map((todo, index) => (
                        <TodoList
                            key={index}
                            title={todo.title}
                            complete={todo.complete}
                        />
                    ))}
                </Flex>
            </Flex>
        </>
    )
};

export default Main;