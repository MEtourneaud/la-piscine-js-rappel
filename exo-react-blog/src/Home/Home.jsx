import Articles from "../Articles/Articles"
import "./Home.scss"
import "../App.scss"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Les trois derniers articles</h2>
        <Articles />
      </main>
      <Footer />
    </div>
  )
}

export default Home
