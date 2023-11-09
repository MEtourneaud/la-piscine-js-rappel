import Footer from "./Footer"
import Header from "./Header"
import "./App.scss"
import "./Contact.scss"

function Contact() {
    return(
        <div className="App">
            <Header />
            <div className="contact">
                <h2>Contact</h2>
                <p>Phone: 01.23.45.67.89</p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;