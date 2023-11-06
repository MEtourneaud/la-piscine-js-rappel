const catCards = document.querySelectorAll(`.card`)

catCards.forEach((catCard) => {
    catCard.addEventListener(`click`, () => {
        const availability = catCard.querySelector(`.availability`)
        availability.style.display = `block`
    })
})