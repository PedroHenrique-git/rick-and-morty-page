import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import api from '../../utils/api';
import { MainContent } from './style';
import IsLoading from '../../components/isLoading/IsLoading';
import EpisodeCard from '../../components/episodeCard/EpisodeCard';

interface IParam {
    id?: string;
}

interface ICharacters {
    name: string;
    image: string;
    species: string;
    origin: {
        name: string;
    };
    status: string;
    gender: string;
    episode: Array<string>;
}

interface IEpisode {
    name: string;
    air_date: string;
    episode: string;
}

export default function CharacterPage(): JSX.Element {
    const [character, setCharacter] = useState<ICharacters>({
        episode: [],
        gender: '',
        image: '',
        name: '',
        origin: { name: '' },
        species: '',
        status: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [episodes, setEpisodes] = useState<IEpisode[]>([]);
    const { id } = useParams<IParam>();

    const getCharacterData = async () => {
        try {
            setIsLoading(false);
            const response = await api.get<ICharacters>(`/character/${id}`);
            const data = await response.data;
            setCharacter(data);
            data.episode.forEach((url) => getEpisode(url));
            setIsLoading(true);
        } catch (e) {
            throw new Error('there is an error in api');
        }
    };

    const getEpisode = async (url: string) => {
        try {
            setIsLoading(false);
            const response = await fetch(url);
            const data: IEpisode = await response.json();
            setEpisodes((oldArr) => [...oldArr, data]);
            setIsLoading(true);
        } catch (e) {
            throw new Error('there is an error in api');
        }
    };

    useEffect(() => {
        getCharacterData();
    }, []);

    if (!isLoading) {
        return <IsLoading msg="Carregando..." />;
    }

    return (
        <>
            <Header title="Rick and Morty SPA" />
            <MainContent>
                <div className="character_informations">
                    <div className="image">
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div className="others_informations">
                        <h1>{character.name}</h1>
                        <p>{character.origin.name}</p>
                        <p>{character.species}</p>
                        <p>{character.status}</p>
                    </div>
                </div>
                <h1 className="title_episodes">Character episode list</h1>
                <ul className="episodes_informations">
                    {episodes.map((episode) => (
                        <EpisodeCard
                            air_date={episode.air_date}
                            name={episode.name}
                            episode={episode.episode}
                        />
                    ))}
                </ul>
            </MainContent>
        </>
    );
}
