import Home from "./page/Home.jsx"
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./page/Contact.jsx"
import Gallerie from "./page/Gallerie.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallerie" element={<Gallerie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
