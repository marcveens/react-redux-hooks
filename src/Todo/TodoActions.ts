import { Todo } from './TodoState';

export enum TypeKeys {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO'
}

export type AddTodoAction = {
    type: TypeKeys.ADD_TODO;
    todo: Todo;
};

export type RemoveTodoAction = {
    type: TypeKeys.REMOVE_TODO;
    index: number;
};

export type TodoActionTypes = 
    | AddTodoAction 
    | RemoveTodoAction;

export const addTodoAction = (todo: Todo) => ({ type: TypeKeys.ADD_TODO, todo });
export const removeTodoAction = (index: number) => ({ type: TypeKeys.REMOVE_TODO, index });