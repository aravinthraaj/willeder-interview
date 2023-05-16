import React, { useEffect, useState } from "react"
import "./Navbar.scss"
import Button from "../../atoms/Button/Button"
import logo from "../../../assests/images/logo-dark.png"
import MobileNavbar from "../../organisms/MobileNavbar/MobileNavbar"

const DesktopNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__center">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">事業内容</a>
        </li>
        <li>
          <a href="#">研究者紹介</a>
        </li>
        <li>
          <a href="#">会社概要</a>
        </li>
      </ul>
      <div className="navbar__right">
        <Button color="secondary-light">JP / EN</Button>
        <Button>お問い合わせ　→</Button>
      </div>
    </nav>
  )
}



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />
}

export default Navbar
