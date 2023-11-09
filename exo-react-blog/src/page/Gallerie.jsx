import Footer from "../component/Footer"
import Header from "../component/Header"
import surprise from "../component/surprise.jpg"
import "../component/Gallerie.scss"



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