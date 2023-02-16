import {Routes, Route, Link, useLocation} from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import Articles from "./pages/Articles.js";
import './Layout.css';

export default function Layout() {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to="/">Domů</Link>
                </li>
                <li>
                    <Link to="/clanky">Články</Link>
                </li>
            </ul>
        </nav>
        <main>
            <Routes>
                <Route path="/" element={<Homepage />}>
                </Route>
                <Route path="/clanky" element={<Articles />}>
                </Route>
            </Routes>
        </main>
    </>);
}