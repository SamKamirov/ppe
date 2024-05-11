import React from 'react';
import ReactDOM from 'react-dom/client';
import '../public/css/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { App } from "./app/app/app";
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { store } from './store';
import { fetchPPEsAction, fetchSertificates } from './api/api-actions';
import { checkAuthAction } from './store/user-process/user-process-api-actions';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

store.dispatch(fetchPPEsAction());
store.dispatch(fetchSertificates());
store.dispatch(checkAuthAction());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <HashRouter> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
            {/* </HashRouter> */}
        </Provider>
    </React.StrictMode>
);