import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Helmet} from "react-helmet";
import Layout from './components/Layout.js';
import './index.css';

function App() {
return (
    <BrowserRouter>
        <Helmet>
            <title>Šachy Kobylisy</title>
        </Helmet>
        <Layout />
    </BrowserRouter>
);
}

createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>);