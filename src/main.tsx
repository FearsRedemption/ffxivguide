// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {SubscriptionProvider} from './context/SubscriptionContext';
import {AccessProvider} from './context/AccessContext';
import App from './App';
import './styles/index.css';
import RedirectHandler from "./components/RedirectHandler.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <RedirectHandler />
            <SubscriptionProvider>
                <AccessProvider>
                    <App />
                </AccessProvider>
            </SubscriptionProvider>
        </BrowserRouter>
    </React.StrictMode>
);
