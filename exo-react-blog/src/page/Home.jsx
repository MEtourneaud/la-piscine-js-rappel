import Articles from "../component/Articles"
import "../component/Home.scss"
import "../App.scss"
import Footer from "../component/Footer"
import Header from "../component/Header"

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
