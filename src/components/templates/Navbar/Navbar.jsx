import React, { useEffect, useState } from "react"
import "./Navbar.scss"
import Button from "../../atoms/Button/Button"
import logo from "../../../assests/images/logo-dark.png"
import MobileNavbar from "../../organisms/MobileNavbar/MobileNavbar"
import { navLinks } from "../../../constants/constants"
import Link from "../../atoms/Link/Link"
import Text from "../../atoms/Text/Text"

const DesktopNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__center">
        {navLinks.map((list) => {
          return (
            <>
              <Link href={list.link}>
                <Text size="sm" key={list.text} className="list">
                  {list.text}
                </Text>
              </Link>
            </>
          )
        })}
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
