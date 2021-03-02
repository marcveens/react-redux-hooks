export class ApiUrlBuilder {
    private baseUrl: string;

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public getStarWarsPeople(search?: string): string {
        return `https://swapi.dev/api/people/?format=json${search ? `&search=${search}` : ''}`;
    }
}
