import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react";
import {Provider} from 'react-redux';
import './index.css'
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
