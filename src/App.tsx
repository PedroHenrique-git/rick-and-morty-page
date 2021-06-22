import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './styles/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Routes from './routes/routes';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <ToastContainer />
            <GlobalStyles />
            <Routes />
        </BrowserRouter>
    );
}

export default App;
