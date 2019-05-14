import { TypeKeys, StarWarsActionTypes } from './StarWarsActions';
import { StarWarsState } from './StarWarsState';
import { asyncDataInitialState } from '../store/AsyncData';
import { baseReducer } from '../BaseRedux/BaseReducer';

const initialState: StarWarsState = {
    people: asyncDataInitialState
};

export const starWarsReducer = (state: StarWarsState = initialState, action: StarWarsActionTypes) =>
    baseReducer<StarWarsState>({
        state,
        action,
        typeKeys: TypeKeys,
        dataProperty: 'people'
    });