export type AsyncData<T> = {
    readonly loading: boolean;
    readonly error: string | null;
    readonly data: T | null;
};

export const asyncDataInitialState = {
    loading: false,
    error: null,
    data: null
};