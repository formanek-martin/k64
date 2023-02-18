import {Link} from "react-router-dom";

export default function TopMenu() {
    return (<>
        <nav>
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
    </>);
}