import { TodoState } from '../Todo/TodoState';
import { StarWarsState } from '../StarWars/StarWarsState';

export type RootState = {
    todos: TodoState;
    starWars: StarWarsState;
};