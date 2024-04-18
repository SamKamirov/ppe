import React from 'react';
import ReactDOM from 'react-dom/client';
import '../public/css/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { App } from "./app/app/app";
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './store';
import { fetchPPEsAction } from './api/api-actions';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

store.dispatch(fetchPPEsAction());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>
);