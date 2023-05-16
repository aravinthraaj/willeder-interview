import React from "react"

import logo from "../../../assets/images/logo-dark.png"

import Button from "../../atoms/Button/Button"
import Link from "../../atoms/Link/Link"
import Text from "../../atoms/Text/Text"

import { navLinks } from "../../../constants/constants"

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

export default DesktopNavbar
