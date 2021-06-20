import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Character from '../../components/characterCard/Character';
import IsLoading from '../../components/isLoading/IsLoading';
import { MainWrapper, ControlButtons } from './style';
import api from '../../utils/api';

interface IData {
    info: {
        count: string;
        page: string;
        next: string;
        prev: string;
    };
    results: Array<{
        id: number;
        name: string;
        status: string;
        type: string;
        gender: string;
        image: string;
        species: string;
    }>;
}

interface ICharacters {
    id: number;
    name: string;
    status: string;
    type: string;
    gender: string;
    image: string;
    species: string;
}

interface IInfo {
    count: string;
    page: string;
    next: string;
    prev: string;
}

export default function Index(): JSX.Element {
    const [characters, setCharacters] = useState<Array<ICharacters>>([]);
    const [info, setInfo] = useState<IInfo>({
        count: '',
        prev: '',
        next: '',
        page: '',
    });
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (url: string | undefined) => {
        try {
            if (typeof url === 'string') {
                setIsLoading(false);
                const response = await api.get<IData>(url);
                const data = await response.data;
                setCharacters(data.results);
                setInfo(data.info);
                setIsLoading(true);
            }
        } catch (e) {
            throw new Error('there is an error in api');
        }
    };

    useEffect(() => {
        getData('/character/?page=1');
    }, []);

    if (!isLoading) {
        return <IsLoading msg="Carregando..." />;
    }

    return (
        <>
            <Header title="Rick and Morty SPA" />
            <MainWrapper>
                <ul className="container_cads">
                    {characters.map((character) => (
                        <Character
                            id={character.id}
                            name={character.name}
                            gender={character.gender}
                            species={character.species}
                            status={character.status}
                            type={character.type}
                            image={character.image}
                        />
                    ))}
                </ul>
            </MainWrapper>
            <ControlButtons>
                <button
                    type="button"
                    onClick={() => getData(info?.next)}
                    disabled={!info.next}
                >
                    Next
                </button>
                <button
                    type="button"
                    onClick={() => getData(info?.prev)}
                    disabled={!info.prev}
                >
                    Prev
                </button>
            </ControlButtons>
        </>
    );
}
