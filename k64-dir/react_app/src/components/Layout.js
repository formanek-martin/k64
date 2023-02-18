import {Routes, Route, Link, useLocation, Form} from "react-router-dom";
import TopMenu from "./elements/TopMenu/TopMenu.js";
import Homepage from "./pages/Homepage.js";
import ArticlesList from "./pages/Articles/ArticlesList.js";
import Article from "./pages/Articles/Article.js";
import Footer from "./elements/Footer/Footer.js";
import './Layout.css';


export default function Layout() {
    return (<>
        <TopMenu />
        <main>
            <Routes>
                <Route path="/" element={<Homepage />}>
                </Route>
                <Route path="/clanky" element={<ArticlesList />}>
                </Route>
                <Route path="/clanky/:nid" element={<Article />}>
                </Route>
                <Route path="/kalendar" element={<div>tady bude kalendar</div>}>
                </Route>
            </Routes>
        </main>
        <Footer/>
    </>);
}