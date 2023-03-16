import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout.js';
import './index.css';

function App() {
return (
    <BrowserRouter>
        <HelmetProvider>
            <Helmet>
                <title>Šachy Kobylisy</title>
            </Helmet>
            <Layout />
        </HelmetProvider>
    </BrowserRouter>
);
}

createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>);