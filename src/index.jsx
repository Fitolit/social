import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss'
import Home from '@pages/Home'
import { StylesProvider } from '@material-ui/core/styles'

ReactDOM.render(
    <StylesProvider>
        <Home />
    </StylesProvider>,
    document.getElementById('app')
);

