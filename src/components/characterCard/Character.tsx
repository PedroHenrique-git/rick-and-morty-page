import React from 'react';
import { Card } from './style';

interface ICharacter {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}

export default function Character({
    name,
    status,
    species,
    type,
    gender,
    image,
}: ICharacter): JSX.Element {
    return (
        <Card>
            <div className="character_photo">
                <img src={image} alt={name} />
            </div>
            <div className="informations_character">
                <h1>{name}</h1>
                <p>{status}</p>
                <p>{species}</p>
                <p>{type}</p>
                <p>{gender}</p>
            </div>
        </Card>
    );
}
