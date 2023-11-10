import { Link } from "react-router-dom";
import "./Header.scss"

function Header() {
    return(
        <header>
            <nav>
                <ul className="list">
                    <li><img className="logo menu" src="/img/logo.png" alt=""></img></li>
                    <li className="menu"><Link to="/">Home</Link></li>
                    <li className="menu"><Link to="/poneys">Poneys</Link></li>
                    <li className="menu"><Link to="/about">A Propos</Link></li>
                    <li className="menu"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header