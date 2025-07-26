// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { AccessProvider } from './context/AccessContext';
import { SubscriptionProvider } from './context/SubscriptionContext'; // if you have one
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AccessProvider>
                <SubscriptionProvider>
                    <App />
                </SubscriptionProvider>
            </AccessProvider>
        </BrowserRouter>
    </React.StrictMode>
);
