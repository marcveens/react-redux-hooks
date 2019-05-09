import { useEffect } from 'react';
// @ts-ignore Types are not up to date yet
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/RootState';
import { setLoaderStarWarsAction, setErrorStarWarsAction, setStarWarsAction } from './StarWarsActions';
import { ApiProxyType, ApiProxy } from '../api/ApiProxy';
import { ApiStarWarsPerson } from '../api/types/ApiStarWarsPerson';
import { AsyncData } from '../store/AsyncData';

type UseStarWarsProps = {
    people: AsyncData<ApiStarWarsPerson[]>;
};

const useAsyncTask = (url: string) => {
    const starWarsPeople: AsyncData<ApiStarWarsPerson[]> = useSelector((state: RootState) => state.starWars.people);
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

        if (!starWarsPeople.data && !starWarsPeople.loading && !starWarsPeople.error) {
            start();
        }
    }, [apiProxy, dispatch, starWarsPeople.data, starWarsPeople.error, starWarsPeople.loading, url]);

    return starWarsPeople;
};


export const useStarWars = (): UseStarWarsProps => ({
    people: useAsyncTask('https://swapi.co/api/people/?format=json')
});