import React, { useCallback } from 'react';
import { RootState } from '../store/RootState';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { TodoInput } from './TodoInput';
import { TypeKeys } from './TodoActions';

export const Todo: React.FC = () => {
    const { todos } = useMappedState(
        useCallback(
            (state: RootState) => ({
                todos: state.todos.tasks
            }),
            [],
        ),
    );
    const dispatch = useDispatch();

    return (
        <div>
            Todo list<br />
            {todos.map((todo, index) => (
                <div key={index}>{todo.value} <button onClick={() =>  dispatch({ type: TypeKeys.REMOVE_TODO, index })}>Delete</button></div>
            ))}

            <TodoInput />
        </div>
    );
};