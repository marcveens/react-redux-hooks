import { ApiStarWarsPerson } from "./ApiStarWarsPerson";

type StarWarsRequest = {
    count: number;
    next: string | null;
    previous: string | null;
};

export type ApiStarWarsPeople = StarWarsRequest & {
    results: ApiStarWarsPerson[];
};