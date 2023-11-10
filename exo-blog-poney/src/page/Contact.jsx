import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"

import "../component/Contact.scss"

function Contact() {
    return(
        <>
            <Header />
            <div className="contact">
                <h2>Formulaire de Contact</h2>
                <form action="/ma-page-de-traitement" method="post">
                    <ul>
                        <li className='contactForm'>
                        <label for="name">Nom&nbsp;:</label>
                        <input type="text" id="name" name="user_name" />
                        </li>
                        <li className='contactForm'>
                        <label for="name">Prénom&nbsp;:</label>
                        <input type="text" id="name" name="user_name" />
                        </li>
                        <li className='contactForm'>
                        <label for="msg">Message&nbsp;:</label>
                        <textarea id="msg" name="user_message"></textarea>
                        </li>
                        <div class="button" className='contactForm'>
                        <button type="submit">Envoyer le message</button>
                        </div>
                    </ul>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact