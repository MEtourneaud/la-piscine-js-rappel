import Home from "./Home/Home"
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./Contact/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
