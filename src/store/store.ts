import { createStore, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from '../Todo/TodoReducers';
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