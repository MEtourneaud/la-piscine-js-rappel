function Header () {
    const isUserLogged = false
    const itemsInCart = 2
    return (
        <header>
            <h1>Super Ecommerce</h1>
            <nav>
                <ul>
                    {isUserLogged ? (
                        <li>Mathieu</li>
                    ) : ( 
                        <li>Veuillez vous connecter</li>
                    )}
                    <li>Home</li>
                    <li>Products</li>
                    {itemsInCart > 0 ? (
                        <li>cart : {itemsInCart}</li>
                    ) : ( 
                        <li>Panier vide</li>
                    )}
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;