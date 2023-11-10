import Home from "./page/Home.jsx"
import Poney from "./page/Poney.jsx"
import About from "./page/About.jsx"
import Contact from "./page/Contact.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poneys" element={<Poney />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
