import { ApiUrlBuilder } from './ApiUrlBuilder';
import { ApiStarWarsPeople } from './types/ApiStarWarsRequest';

type FetchDataOptions = {
    noJson?: boolean;
};

export class ServerApiProxy {
    private readonly urlBuilder: ApiUrlBuilder;

    public constructor() {
        this.urlBuilder = new ApiUrlBuilder('/');
    }

    public async getStarWarsPeople(search?: string): Promise<ApiStarWarsPeople> {
        return await this.getData<ApiStarWarsPeople>(this.urlBuilder.getStarWarsPeople(search));
    }

    private async getData<T>(url: string, options?: FetchDataOptions): Promise<T> {
        let getDataPromise: Promise<T> = new Promise((resolve, reject) => {
            const cleanUrl = url.replace(/([^:]\/)\/+/g, '$1');

            fetch(cleanUrl)
                .then(async (res) => {
                    if (!res.ok) {
                        throw (res);
                    }

                    const text = await res.text();

                    if (options && options.noJson) {
                        return text;
                    }

                    const json = JSON.parse(text);
                    return json;
                })
                .then(res => {
                    resolve(res as T);
                })
                .catch(error => {
                    console.error(`API call GET '${url}' fails with code: ${error.statusCode}. Exception: ${error.toString()}`);
                    reject(error);
                });
        });

        return getDataPromise;
    }
}