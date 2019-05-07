import { createStore, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from '../Todo/TodoReducers';
import { create } from 'redux-react-hook';
import { RootState } from './RootState';
import { TodoActionTypes } from '../Todo/TodoActions';

const rootReducer = combineReducers({
    todos: todoReducer
});

export function configureStore() {
    const rootState: RootState = {
        todos: [
            {
                value: 'Initial todo'
            }
        ]
    };

    return createStore(
        rootReducer,
        rootState as any,
        composeWithDevTools()
    );
}

export const { StoreContext, useDispatch } = create<
    RootState,
    TodoActionTypes,
    Store<RootState, TodoActionTypes>
>();