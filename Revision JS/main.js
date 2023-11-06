// Selection de tout les elements qui ont la classe "card"
const catCards = document.querySelectorAll(`.card`)

// Boucle pour executer une fonction sur chaque card trouvé
catCards.forEach((catCard) => {

    // Ajout d'un évènement pour cliquer sur une card
    catCard.addEventListener(`click`, () => {

        // Selection du bouton qui possede la classe "availability"
        const availability = catCard.querySelector(`.availability`)
        
        // Ajout d'une boucle if pour afficher/masquer le bouton
        if(availability.style.display == `block`) {
            availability.style.display = `none`
        } else {
            availability.style.display = `block`
        }
    })
})