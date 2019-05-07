import { TypeKeys, StarWarsActionTypes } from './StarWarsActions';
import { StarWarsState } from './StarWarsState';
import { asyncDataInitialState } from '../api/AsyncData';

const initialState: StarWarsState = {
    people: asyncDataInitialState
}

export function starWarsReducer(state: StarWarsState = initialState, action: StarWarsActionTypes): StarWarsState {
    switch (action.type) {
        case TypeKeys.SET_LOADER_STARWARS:
            return { ...state, people: { ...state.people, loading: true } };
        case TypeKeys.SET_ERROR_STARWARS:
            return { ...state, people: { ...state.people, loading: false, error: action.error } };
        case TypeKeys.SET_STARWARS:
            return { ...state, people: { ...state.people, loading: false, data: action.data } };
        default:
            return state;
    }
}