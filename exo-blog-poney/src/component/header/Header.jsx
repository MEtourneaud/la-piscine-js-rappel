import { Link } from "react-router-dom";
import "./Header.scss"

function Header() {
    return(
        <header>
            <nav>
                <ul className="list">
                    <li><img className="logo menu" src="/img/logo.png" alt=""></img></li>
                    <li className="menu"><Link to="/" className="menu">Home</Link></li>
                    <li className="menu"><Link to="/poneys" className="menu">Poneys</Link></li>
                    <li className="menu"><Link to="/about" className="menu">A Propos</Link></li>
                    <li className="menu"><Link to="/contact" className="menu">Contact</Link></li>
                    <li className="menu"><Link to="/poneytalk" className="menu">PoneyTalk</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header