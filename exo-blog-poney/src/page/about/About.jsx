import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";

import "../component/About.scss"

function APropos() {
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
    };

    return(
        <>
            <Header />
            <div className="poneyman">
                <h1>Moi</h1>
                <img src="/img/ponyman.jpg" alt=""></img>
                <p>Salut, je suis {infos.author}, j'ai publié le site le {infos.published}, t'étais où ?</p>
                <p>Tu me cherches ? Viens me trouver {infos.address}.</p>
            </div>
            <Footer />
        </>
    )
}

export default APropos