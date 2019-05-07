import { useCallback } from 'react';
// @ts-ignore Types are not up to date yet
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/RootState';
import { TodoState, Todo } from './TodoState';
import { removeTodoAction, addTodoAction } from './TodoActions';

type UseTodoProps = {
    todos: TodoState;
    removeTodo: (index: number) => void;
    addTodo: (todo: Todo) => void;
}

export const useTodo = (): UseTodoProps => {
    const dispatch = useDispatch();

    const todos: TodoState = useSelector((state: RootState) => state.todos);
    const removeTodo = useCallback((index: number) => dispatch(removeTodoAction(index)), []);
    const addTodo = useCallback((todo: Todo) => dispatch(addTodoAction(todo)), []);

    return { todos, removeTodo, addTodo };
}