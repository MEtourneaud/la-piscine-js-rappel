function ProfilMenu() {
  const userLogged = {
    firstName: "Mathieu",
    lastName: "Etourneaud",
  }

  const isUserLogged = true

  return (
    <>
      {isUserLogged ? (
        <li>
          {userLogged.firstName} {userLogged.lastName}
        </li>
      ) : (
        <li>Veuillez vous connecter</li>
      )}
    </>
  )
}

export default ProfilMenu
