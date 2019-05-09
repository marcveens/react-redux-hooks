export type AsyncData<T> = {
	readonly loading: boolean;
	readonly error: any;
	readonly data: T | null;
};

export const asyncDataInitialState = {
	loading: false,
	error: null,
	data: null
};