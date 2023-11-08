function Header () {
    const userLogged = {
        firstName : "Mathieu",
        lastName : "Etourneaud",
        job : "Web Dev Junior"
    }

    const isUserLogged = true
    const itemsInCart = 2
    
    return (
        <header>
            <h1>Super Ecommerce</h1>
            <nav>
                <ul>
                    {isUserLogged ? (
                        <li>{userLogged.firstName} {userLogged.lastName}</li>
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