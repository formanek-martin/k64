import {Link} from "react-router-dom";
import './Header.css';
import logo from "../../../assets/images/k64-logo-white.png"; 

export default function Header() {
    return (<>
        <header className="k-grid">
            <div className="header-inner k-grid--center">
                <div className="top-logo"><img src={logo}/></div>
                <nav className="top-menu">
                    <ul>
                        <li>
                            <Link to="/">Domů</Link>
                        </li>
                        <li>
                            <Link to="/clanky">Články</Link>
                        </li>
                        <li>
                            <Link to="/kalendar">Kalendář</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>);
}