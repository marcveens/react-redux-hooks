export type SetLoaderAction<T> = {
    type: T
}

export type SetErrorAction<T> = {
    type: T;
    error: any;
}

export type SetDataAction<TType, TData> = {
    type: TType;
    data: TData | null
}