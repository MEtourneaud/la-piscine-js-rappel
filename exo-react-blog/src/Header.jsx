import ProfilMenu from "./ProfilMenu"
import "./Header.css"

function Header() {
  return (
    <header className="Header">
      <h1>Mon mega blog !</h1>
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
