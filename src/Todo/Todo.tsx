import React, { useCallback } from 'react';
import { RootState } from '../store/RootState';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { TodoInput } from './TodoInput';
import { TypeKeys } from './TodoActions';
import { Heading } from '../ui/Heading/Heading.style';
import { useTodo } from './useTodo';

export const Todo: React.FC = () => {
    const { todos, deleteTodo } = useTodo();

    console.log(todos);

    return (
        <div>
            <Heading as="h1">Todo list</Heading>
            {todos.tasks.map((todo, index) => (
                <div key={index}>{todo.value} <button onClick={() => deleteTodo(index)}>Delete</button></div>
            ))}

            <TodoInput />
        </div>
    );
};