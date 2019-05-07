import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from '../Todo/TodoReducer';
import { starWarsReducer } from '../StarWars/StarWarsReducer';
import { RootState } from './RootState';

const rootReducer = combineReducers({
    todos: todoReducer,
    starWars: starWarsReducer
});

export function configureStore() {
    const rootState: Partial<RootState> = {
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