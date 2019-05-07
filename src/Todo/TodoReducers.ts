import { TodoState } from './TodoState';
import { TodoActionTypes, TypeKeys } from './TodoActions';

const initialState: TodoState = {
    todos: []
};

export function todoReducer(state: TodoState = initialState, action: TodoActionTypes): TodoState {
    switch (action.type) {
        case TypeKeys.ADD_TODO:
            return { ...state, todos: state.todos.concat(action.todo) };
        case TypeKeys.REMOVE_TODO:
            return { ...state, todos: state.todos.splice(action.index, 1) };
        default:
            return state;
    }
}