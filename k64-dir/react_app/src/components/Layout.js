import {Routes, Route} from "react-router-dom";
import Header from "./elements/Header/Header.js";
import Footer from "./elements/Footer/Footer.js";
import Homepage from "./pages/Homepage.js";
import ArticlesList from "./pages/Articles/ArticlesList.js";
import Article from "./pages/Articles/Article.js";
import KobyCalendar from "./pages/KobyCalendar/KobyCalendar.js";
import TeamList from "./pages/Teams/TeamList.js";
import Team from "./pages/Teams/Team.js";
import './Layout.css';


export default function Layout() {
    return (<>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Homepage />}>
                </Route>
                <Route path="/clanky" element={<ArticlesList />}>
                </Route>
                <Route path="/clanky/:nid" element={<Article />}>
                </Route>
                <Route path="/druzstva" element={<TeamList />}>
                </Route>
                <Route path="/druzstva/:nid" element={<Team />}>
                </Route>
                <Route path="/kalendar" element={<KobyCalendar />}>
                </Route>
            </Routes>
        </main>
        <Footer/>
    </>);
}