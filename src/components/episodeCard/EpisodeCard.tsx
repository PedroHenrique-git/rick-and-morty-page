import React from 'react';
import { EpisodeInfo } from './style';

interface IEpisode {
    name: string;
    air_date: string;
    episode: string;
}

export default function EpisodeCard({
    name,
    air_date,
    episode,
}: IEpisode): JSX.Element {
    return (
        <EpisodeInfo key={name}>
            <p>{name}</p>
            <p>{air_date}</p>
            <p>{episode}</p>
        </EpisodeInfo>
    );
}
