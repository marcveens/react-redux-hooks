import React, { useState } from 'react';
import { TypeKeys } from './TodoActions';
import { useDispatch } from 'redux-react-hook';
import { TodoInput as StyledTodoInput } from './Todo.style';

export const TodoInput: React.FC = () => {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        if (newTodo !== '') {
            dispatch({ type: TypeKeys.ADD_TODO, todo: { value: newTodo } });
            setNewTodo('');
        }
    };

    return (
        <StyledTodoInput>
            <input type="text" value={newTodo} onChange={e => setNewTodo(e.currentTarget.value)} />
            <button onClick={addTodo}>add</button>
        </StyledTodoInput>
    );
};