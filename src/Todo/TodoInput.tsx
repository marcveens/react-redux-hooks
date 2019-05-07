import React, { useState } from 'react';
import { TodoInput as StyledTodoInput } from './Todo.style';
import { useTodo } from './useTodo';

export const TodoInput: React.FC = () => {
    const [newTodo, setNewTodoValue] = useState('');
    const { addTodo } = useTodo();

    const addNewTodo = () => {
        if (newTodo !== '') {
            addTodo({ value: newTodo });
            setNewTodoValue('');
        }
    };

    return (
        <StyledTodoInput>
            <input type="text" value={newTodo} onChange={e => setNewTodoValue(e.currentTarget.value)} />
            <button onClick={addNewTodo}>add</button>
        </StyledTodoInput>
    );
};