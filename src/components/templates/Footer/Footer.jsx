import React from "react"
import Logo from "../../../assets/images/logo-light.png"
import "./Footer.scss"

import Text from "../../atoms/Text/Text"
import Link from "../../atoms/Link/Link"

import { footerLink } from "../../../constants/constants"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__links">
          {footerLink.map((list) => {
            return (
              <>
                <Link href={list.link}>
                  <Text size="sm" key={list.text}>
                    {list.text}
                  </Text>
                </Link>
              </>
            )
          })}
        </div>
        <div className="footer__container">
          <div className="logo">
            <img src={Logo} alt="Company Logo" />
          </div>
          <div className="address">
            <Text size="xs">MPO株式会社</Text>
            <Text size="xs">
              〒216-8512 神奈川県川崎市宮前区菅生2-16-1聖マリアンナ医科大学
              グリーン棟3階
            </Text>
            <Text size="xs">TEL：044-979-1631 FAX：044-979-1632</Text>
          </div>
        </div>
        <div className="footer__copyright">
          <Text size="xs">Copyright © MPO Co.,Ltd. All Rights Reserved.</Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer
