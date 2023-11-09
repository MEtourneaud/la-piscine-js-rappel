import Home from "./page/Home.jsx"
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./page/Contact.jsx"
import Profil from "./page/Profil.jsx"
import Articles from "./page/Articles.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
