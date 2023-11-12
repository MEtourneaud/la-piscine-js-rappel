import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"

import "../component/PoneyTalk.scss"


function PoneyTalk() {

    const talkPhrases = [{
        sentence1 : `POURQUOI T'AS CLIQUE !!`,
        sentence2 : `ARRETE !!`,
        sentence3 : `STOOOOP !!`,
    }]


    const clickButton = (event) => {
        event.preventDefault()
        let randomSentence = talkPhrases[(Math.random()*(talkPhrases.length-1)).toFixed()]
        console.log(randomSentence);
      };

    return(
        <>
            <Header />
            <div className="bgTalk">
                <button onClick={clickButton}>Appuie !</button>
            </div>
            <Footer />
        </>
    )
}

export default PoneyTalk