import React from 'react';
import { HeaderWrapper } from './style';
import logo from '../../images/logo.png';

interface IHeaderProperty {
    title: string;
}

export default function Header({ title }: IHeaderProperty): JSX.Element {
    return (
        <HeaderWrapper>
            <div className="container_title_logo">
                <img src={logo} alt="rick and morty logo" />
                <h1>{title}</h1>
            </div>
            <div className="search_char">
                <input type="text" placeholder="character name" />
                <button type="button">Search character</button>
            </div>
        </HeaderWrapper>
    );
}
