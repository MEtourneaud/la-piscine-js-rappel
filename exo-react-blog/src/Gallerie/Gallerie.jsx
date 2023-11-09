import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import surprise from "./surprise.jpg"
import "./Gallerie.scss"



function Gallerie() {
    return(
        <div className="App">
            <Header />
            <img className="surprise" src={surprise} alt="Surprise" />
            <Footer />
        </div>
    )
}

export default Gallerie;