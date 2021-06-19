import React from 'react';
import { IsLoadingContainer } from './style';

interface IIsLoadind {
    msg: string;
}

export default function IsLoading({ msg }: IIsLoadind): JSX.Element {
    return (
        <IsLoadingContainer>
            <h1>{msg}</h1>
        </IsLoadingContainer>
    );
}
