import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from '../Todo/TodoReducer';
import { starWarsReducer } from '../StarWars/StarWarsReducer';
import { RootState } from './RootState';

// -- import-generated-reducers --

const rootReducer = combineReducers({
    todos: todoReducer,
    starWars: starWarsReducer,

    // -- generated-reducers --
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