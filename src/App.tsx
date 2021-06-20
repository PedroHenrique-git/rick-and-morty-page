import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyle';
import Routes from './routes/routes';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes />
        </BrowserRouter>
    );
}

export default App;
