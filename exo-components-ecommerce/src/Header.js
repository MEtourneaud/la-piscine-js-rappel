function Header () {
    const isUserLogged = false
    return (
        <header>
            <h1>Super Ecommerce</h1>
            <nav>
                <ul>
                    <li>Mon</li>
                    <li>Super</li>
                    <li>Menu</li>
                    {isUserLogged ? (
                        <li>Mathieu</li>
                    ) : ( 
                        <li>Veuillez vous connecter</li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;