// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SubscriptionProvider } from './context/SubscriptionContext';
import { AccessProvider } from './context/AccessContext';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SubscriptionProvider>
            <AccessProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AccessProvider>
        </SubscriptionProvider>
    </React.StrictMode>
);
