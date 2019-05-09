import { useEffect } from 'react';
// @ts-ignore Types are not up to date yet
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/RootState';
import { StarWarsState } from './StarWarsState';
import { setLoaderStarWarsAction, setErrorStarWarsAction, setStarWarsAction } from './StarWarsActions';
import { ApiStarWarsPeople } from '../api/types/ApiStarWarsRequest';
import { useAsyncTaskFetch } from '../store/AsyncData';

type UseStarWarsProps = StarWarsState;

const useAsyncTask = (task: Function, deps: any[]) => {
	const starWars: StarWarsState = useSelector((state: RootState) => state.starWars);
	let dispatch = useDispatch();

	useEffect(() => {
		const start = async () => {
			dispatch(setLoaderStarWarsAction());
			try {
				const result = await task() as ApiStarWarsPeople;
				dispatch(setStarWarsAction(result.results));
			} catch (e) {
				dispatch(setErrorStarWarsAction(e));
			}
		};

		if (!starWars.people.data && !starWars.people.loading && !starWars.people.error) {
			start();
		}
	}, deps);

	return starWars;
};


export const useStarWars = (): UseStarWarsProps => {
	return useAsyncTaskFetch(
		'https://swapi.co/api/people/?format=json',
		useAsyncTask
	);
}