type CacheRecord = any; // eslint-disable-line @typescript-eslint/no-explicit-any

type CacheRecords = {
    [key: string]: CacheRecord;
}

export class ApiCache {
    private static instance: ApiCache;
    private cache: CacheRecords = {};

    public constructor() {
        if (ApiCache.instance) {
            return ApiCache.instance;
        }

        ApiCache.instance = this as ApiCache;
    }

    public get = <T>(url: string): T | null => {
        const cacheItem = this.cache[url];

        return cacheItem || null;
    }

    public set = (url: string, result: CacheRecord): void => {
        this.cache[url] = result;
    }
}