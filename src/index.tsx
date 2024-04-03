import React from 'react';
import ReactDOM from 'react-dom/client';
import '../public/css/index.scss';
import * as bootstrap from 'bootstrap';
import { App } from "./app/app/app";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>
);