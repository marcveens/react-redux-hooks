import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from '../Todo/TodoReducer';
import { RootState } from './RootState';

const rootReducer = combineReducers({
    todos: todoReducer
});

export function configureStore() {
    const rootState: RootState = {
        todos: {
            tasks: [
                {
                    value: 'Initial todo'
                }
            ]
        }
    };

    return createStore(
        rootReducer,
        rootState,
        composeWithDevTools()
    );
}