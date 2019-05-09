import { ApiStarWarsPerson } from '../api/types/ApiStarWarsPerson';
import { SetLoaderAction, SetErrorAction, SetDataAction } from '../BaseRedux/BaseActions';

export enum TypeKeys {
    SET_LOADER = 'SET_LOADER_STARWARS',
    SET_ERROR = 'SET_ERROR_STARWARS',
    SET_DATA = 'SET_STARWARS'
}

export type setLoaderStarWarsAction = SetLoaderAction<TypeKeys.SET_LOADER>;
export type setErrorStarWarsAction = SetErrorAction<TypeKeys.SET_ERROR>;
export type setStarWarsAction = SetDataAction<TypeKeys.SET_DATA, ApiStarWarsPerson[]>;

export type StarWarsActionTypes = 
    | setLoaderStarWarsAction 
    | setErrorStarWarsAction
    | setStarWarsAction;

export const setLoaderStarWarsAction = () => ({ type: TypeKeys.SET_LOADER });
export const setErrorStarWarsAction = (error: string) => ({ type: TypeKeys.SET_ERROR, error });
export const setStarWarsAction = (data: ApiStarWarsPerson[] | null) => ({ type: TypeKeys.SET_DATA, data });