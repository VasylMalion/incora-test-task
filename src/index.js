// core
import React from 'react';
import ReactDOM from 'react-dom';

// styles
import './index.css';

// components
import {App} from "./components/app/app";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
