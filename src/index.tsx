import React from 'react';
import ReactDOM from 'react-dom/client';
import '../public/css/index.scss';
import * as bootstrap from 'bootstrap';
import {App} from "./app/app";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);