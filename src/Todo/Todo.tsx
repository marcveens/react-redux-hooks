import React from 'react';
import { TodoInput } from './TodoInput';
import { Heading } from '../ui/Heading/Heading.style';
import { useTodo } from './useTodo';
import { TodoRow, TodoList } from './Todo.style';

export const Todo: React.FC = () => {
    const { todos, removeTodo } = useTodo();

    return (
        <div>
            <Heading as="h1">Todo list</Heading>

            <TodoInput />

            <TodoList>
                {todos.tasks.map((todo, index) => (
                    <TodoRow key={index}>
                        {todo.value}
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </TodoRow>
                ))}
            </TodoList>
        </div>
    );
};