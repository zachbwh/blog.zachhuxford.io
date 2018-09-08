import React from 'react';
import ReactDOM from 'react-dom';
import './css/w3.css';
import './css/index.css';

import PageRouter from './react-components/page-router';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-107350487-2');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <PageRouter />,
    document.getElementById('root')
);