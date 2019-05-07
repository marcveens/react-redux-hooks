import React, { useState } from 'react';
import { TypeKeys } from './TodoActions';
import { useDispatch } from 'redux-react-hook';

export const TodoInput: React.FC = () => {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch({ type: TypeKeys.ADD_TODO, todo: { value: newTodo } });
        setNewTodo('');
    };

    return (
        <div>
            <input type="text" value={newTodo} onChange={e => setNewTodo(e.currentTarget.value)} />
            <button onClick={addTodo}>add</button>
        </div>
    );
};