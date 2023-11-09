import ProfilMenu from "./ProfilMenu"

function Header() {
  return (
    <header>
      <h1>Mon mega blog !</h1>
      <ul>
        <ProfilMenu />
        <li>Home</li>
        <li>Articles</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Header
