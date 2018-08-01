import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Base from "./components/base/base";
import registerServiceWorker from './registerServiceWorker';
import "./scss/index.css";
import "./fonts/athleticons/athleticons.css";
ReactDOM.render(
    <BrowserRouter>
        <Base />
    </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
