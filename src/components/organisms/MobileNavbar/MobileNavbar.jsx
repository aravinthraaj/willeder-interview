import React, { useState } from "react";

import logo from "../../../assets/images/logo-dark.png";
import { ReactComponent as BurgerMenu } from "../../../assets/icons/burger-menu.svg";
import { ReactComponent as Contact } from "../../../assets/icons/contact.svg";

import Text from "../../atoms/Text/Text";

import "./MobileNavbar.scss";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="mobile-navbar" id="mobilenavbar">
      <div className="nav-wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="button-wrapper">
          <div className="contact">
            <Contact width={22} height={22} />
          </div>
          <div className="menu-wrapper">
            <div onClick={handleMenuClick} className="menu">
              <BurgerMenu width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="links-wrapper">
        <div className={`mobile-navbar__links ${isOpen ? "open" : ""}`}>
          <a href="/">
            <div className="list">
              <Text size="md">Home</Text>
            </div>
          </a>
          <a href="/">
            <div className="list">
              <Text size="md">事業内容</Text>
            </div>
          </a>
          <a href="/">
            <div className="list">
              <Text size="md">研究者紹介</Text>
            </div>
          </a>
          <a href="/">
            <div className="list">
              <Text size="md">会社概要</Text>
            </div>
          </a>
          <a href="/">
            <div className="list">
              <Text size="md">JP / EN</Text>
            </div>
          </a>
          <a href="/">
            <div className="list">
              <Text size="md">閉じる</Text>
            </div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar
