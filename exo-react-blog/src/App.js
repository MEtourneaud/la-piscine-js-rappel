import Home from "./Home/Home"
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./Contact/Contact"
import Gallerie from "./Gallerie/Gallerie"

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
