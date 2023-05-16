import React from "react"
import "./styles/global.scss"
import Navbar from "./components/templates/Navbar/Navbar"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
