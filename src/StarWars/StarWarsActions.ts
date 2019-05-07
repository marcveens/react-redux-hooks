import { ApiStarWarsPerson } from '../api/types/ApiStarWarsPerson';

export enum TypeKeys {
    SET_LOADER_STARWARS = 'SET_LOADER_STARWARS',
    SET_ERROR_STARWARS = 'SET_ERROR_STARWARS',
    SET_STARWARS = 'SET_STARWARS'
}

export type setLoaderStarWarsAction = {
    type: TypeKeys.SET_LOADER_STARWARS;
};

export type setErrorStarWarsAction = {
    type: TypeKeys.SET_ERROR_STARWARS;
    error: any;
};

export type setStarWarsAction = {
    type: TypeKeys.SET_STARWARS;
    data: ApiStarWarsPerson[] | null;
};

export type StarWarsActionTypes = 
    | setLoaderStarWarsAction 
    | setErrorStarWarsAction
    | setStarWarsAction;

export const setLoaderStarWarsAction = () => ({ type: TypeKeys.SET_LOADER_STARWARS });
export const setErrorStarWarsAction = (error: any) => ({ type: TypeKeys.SET_ERROR_STARWARS, error });
export const setStarWarsAction = (data: ApiStarWarsPerson[] | null) => ({ type: TypeKeys.SET_STARWARS, data });