import { useMappedState, useDispatch } from 'redux-react-hook';
import { useCallback } from 'react';
import { RootState } from '../store/RootState';
import { TodoState } from './TodoState';
import { addTodo, removeTodo } from './TodoActions';

type UseTodoProps = {
    todos: TodoState;
    deleteTodo: (index: number) => void;
}

export const useTodo = (): UseTodoProps => {
    const todos = useMappedState(
        useCallback((state: RootState) => state.todos, [])
    );

    const dispatch = useDispatch();
    // Todo, dynamic index instead of 0
    const deleteTodo = useCallback(() => dispatch(removeTodo(0)), []);

    return { todos, deleteTodo };
}