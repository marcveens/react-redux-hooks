import React, { useCallback } from 'react';
import { RootState } from '../store/RootState';
import { useMappedState } from 'redux-react-hook';

export const Todo: React.FC = () => {
    const { todos } = useMappedState(
        useCallback(
            (state: RootState) => ({
                todos: state.todos
            }),
            [],
        ),
    );

    return (
        <div>
            Todo list<br />
            {todos.map((todo, index) => (
                <div key={index}>{todo.value}</div>
            ))}

            <input type="text" />
            <button>add</button>
        </div>
    );
};