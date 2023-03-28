import {Link} from "react-router-dom";
import './Header.css';
import logo from "../../../assets/images/k64-logo-white.png"; 

export default function Header() {
    return (<>
        <header className="k-grid">
            <div className="header-inner k-grid--center">
                <div className="top-logo">
                    <Link to="/"><img src={logo}/></Link>
                </div>
                <div className="menu-wrapper">
                    <nav className="main-menu">
                        <ul>
                            <li>
                                <Link to="/">Domů</Link>
                            </li>
                            <li>
                                <Link to="/clanky">Články</Link>
                            </li>
                            <li>
                                <Link to="/o-nas">O nás</Link>
                            </li>
                            <li>
                                <Link to="/kalendar">Kalendář</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="teams-menu">
                        <ul>
                            <li>
                                <Link to="/druzstva/acko">A</Link>
                            </li>
                            <li>
                                <Link to="/druzstva/becko">B</Link>
                            </li>
                            <li>
                                <Link to="/druzstva/cecko">C</Link>
                            </li>
                            <li>
                                <Link to="/druzstva/decko">D</Link>
                            </li>
                            <li>
                                <Link to="/druzstva/ecko">E</Link>
                            </li>
                            <li>
                                <Link to="/druzstva/efko">F</Link>
                            </li>
                            <li>
                                <Link to="/druzstva/mladez">mládež</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </>);
}