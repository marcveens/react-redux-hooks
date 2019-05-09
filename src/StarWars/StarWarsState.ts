import { ApiStarWarsPerson } from '../api/types/ApiStarWarsPerson';
import { AsyncData } from '../store/AsyncData';

export type StarWarsState = {
    people: AsyncData<ApiStarWarsPerson[]>;
};