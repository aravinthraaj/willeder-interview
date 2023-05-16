import React, { useEffect, useState } from "react"
import "./Navbar.scss"

import MobileNavbar from "../../organisms/MobileNavbar/MobileNavbar"
import DesktopNavbar from "../../organisms/DesktopNavbar/DesktopNavbar"


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
