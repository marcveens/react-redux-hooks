import React from 'react';
import { Heading } from '../ui/Heading/Heading.style';
import { useStarWars } from './useStarWars';

export const StarWars: React.FC = () => {
    const { people } = useStarWars();

    return (
        <div>
            <Heading as="h1">StarWars list</Heading>

            {people.loading && <div>Loading</div>}
            {people.error && <div>Error!: {people.error.toString()}</div>}
            {people.data &&
                <ul>
                    {people.data.map((person, index) => (
                        <li key={index}>{person.name}</li>
                    ))}
                </ul>
            }
        </div>
    );
};