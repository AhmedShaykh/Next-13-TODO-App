"use client"
import { FC } from 'react';
import {
    Checkbox,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text
} from '@chakra-ui/react';
import { Todos } from './Types';
import { ChevronDownIcon } from '@chakra-ui/icons';

const TodoList: FC<Todos> = ({ title, complete }) => {
    return (
        <>
            <Flex>
                <Checkbox
                    w="full"
                    isChecked={complete}
                >
                    <Text
                        as={complete ? "s" : "p"}
                    >
                        {title}
                    </Text>
                </Checkbox>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        colorScheme="blackalpha.600"
                        icon={<ChevronDownIcon />}
                        variant='ghost'
                    />
                    <MenuList
                        bg="blackalpha.600"
                        color="white"
                    >
                        <MenuItem
                            bg="blackalpha.600"
                            color="white"
                            _hover={{ bg: "gray.900" }}
                        >
                            Edit
                        </MenuItem>
                        <MenuItem
                            bg="blackalpha.600"
                            color="white"
                            _hover={{ bg: "gray.900" }}
                        >
                            Delete
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </>
    )
};

export default TodoList;