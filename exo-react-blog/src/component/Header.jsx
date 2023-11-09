import { Link } from "react-router-dom";
import ProfilMenu from "./ProfilMenu"
import "./Header.scss"
import canard from "./canard.png"


function Header() {
  return (
    <header className="Header">
      <h1>Mon mega blog !</h1>
      <img className="canard" src={canard} alt="Canard" />
      <nav>
        <ul className="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/profil">Profil</Link></li>
            <ProfilMenu />
        </ul>
      </nav>
    </header>
  )
}

export default Header
