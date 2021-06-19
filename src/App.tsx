import React from 'react';
import { GlobalStyles } from './styles/GlobalStyle';
import Index from './pages/index/Index';

function App(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Index />
        </>
    );
}

export default App;
