import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './style';

interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}

export default function Character({
    id,
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
                <Link to={`/character/${id}`}>
                    <h1>{name}</h1>
                </Link>
                <p>{status}</p>
                <p>{species}</p>
                <p>{type}</p>
                <p>{gender}</p>
            </div>
        </Card>
    );
}
