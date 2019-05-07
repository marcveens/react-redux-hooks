import { ApiStarWarsPerson } from '../api/types/ApiStarWarsPerson';
import { AsyncData } from '../api/AsyncData';

export type StarWarsState = {
    people: AsyncData<ApiStarWarsPerson[]>;
};