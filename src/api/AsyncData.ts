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


const readBody = (body: any) => body.json();
export const useAsyncTaskFetch = (input: string, useAsyncTask: Function) =>
	useAsyncTask(
		async () => {
			const response = await fetch(input);
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return await readBody(response);
		},
		[input]
	);