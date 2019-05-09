import { TodoState } from './TodoState';
import { TodoActionTypes, TypeKeys } from './TodoActions';

const initialState: TodoState = {
    tasks: []
};

export function todoReducer(state: TodoState = initialState, action: TodoActionTypes): TodoState {
    switch (action.type) {
        case TypeKeys.ADD_TODO:
            return { ...state, tasks: state.tasks.concat(action.todo) };
        case TypeKeys.REMOVE_TODO: {
            const tasksCopy = state.tasks.slice();
            tasksCopy.splice(action.index, 1);
            return { ...state, tasks: tasksCopy };
        }
        default:
            return state;
    }
}