import { useEffect, useState } from 'react';
// @ts-ignore Types are not up to date yet
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/RootState';
import { setLoaderStarWarsAction, setErrorStarWarsAction, setStarWarsAction } from './StarWarsActions';
import { ApiProxyType, ApiProxy } from '../api/ApiProxy';
import { ApiStarWarsPerson } from '../api/types/ApiStarWarsPerson';
import { AsyncData } from '../store/AsyncData';

type UseStarWarsProps = {
    people: AsyncData<ApiStarWarsPerson[]>;
    loadPeople: (query?: string) => void;
};

export const useStarWars = (): UseStarWarsProps => {
    const [searchQuery, setSearchQuery] = useState('');
    const people: AsyncData<ApiStarWarsPerson[]> = useSelector((state: RootState) => state.starWars.people);
    const apiProxy: ApiProxyType = ApiProxy();
    let dispatch = useDispatch();

    const fetchData = async (query: string) => {
        dispatch(setLoaderStarWarsAction());
        try {
            const data = await apiProxy.getStarWarsPeople(query);
            dispatch(setStarWarsAction(data.results));
        } catch (e) {
            dispatch(setErrorStarWarsAction(e));
        }
    };

    useEffect(() => {
        fetchData(searchQuery);
    }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps


    const loadPeople = (query?: string) => {
        setSearchQuery(query || '');
    };

    return { people, loadPeople };
};