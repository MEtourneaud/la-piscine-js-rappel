import ProfilMenu from "../ProfilMenu"
import "./Header.scss"
import canard from "./canard.png"


function Header() {
  return (
    <header className="Header">
      <h1>Mon mega blog !</h1>
      <img className="canard" src={canard} alt="Canard" />
      <ul className="list">
        <li>Home</li>
        <li>Articles</li>
        <li>Contact</li>
        <ProfilMenu />
      </ul>
    </header>
  )
}

export default Header
