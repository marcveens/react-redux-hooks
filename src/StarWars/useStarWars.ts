import { useEffect } from 'react';
// @ts-ignore Types are not up to date yet
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/RootState';
import { StarWarsState } from './StarWarsState';
import { setLoaderStarWarsAction, setErrorStarWarsAction, setStarWarsAction } from './StarWarsActions';
import { ApiProxyType, ApiProxy } from '../api/ApiProxy';

type UseStarWarsProps = StarWarsState;

const useAsyncTask = (url: string) => {
	const starWars: StarWarsState = useSelector((state: RootState) => state.starWars);
	const apiProxy: ApiProxyType = ApiProxy();
	let dispatch = useDispatch();

	useEffect(() => {
		const start = async () => {
			dispatch(setLoaderStarWarsAction());
			try {
				const data = await apiProxy.getStarWarsPeople();
				dispatch(setStarWarsAction(data.results));
			} catch (e) {
				dispatch(setErrorStarWarsAction(e));
			}
		};

		if (!starWars.people.data && !starWars.people.loading && !starWars.people.error) {
			start();
		}
	}, [url]);

	return starWars;
};


export const useStarWars = (): UseStarWarsProps => {
	return useAsyncTask('https://swapi.co/api/people/?format=json');
}