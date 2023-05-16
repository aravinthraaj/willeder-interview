import React from "react"
import "./Footer.scss"
import Text from "../../atoms/Text/Text"
import Link from "../../atoms/Link/Link"
import Logo from "../../../assests/images/logo-light.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__links">
          <Text size="sm">
            <Link>会社概要</Link>
          </Text>
          {/* <a href="会社概要" style={{textDecoration:"none"}}>
          <h6 style={{borderBottom:" 1px solid black",paddingBottom:"0px"}}>会社概要</h6>
        </a> */}
          <Text size="sm">
            <Link>事業内容</Link>
          </Text>
          <Text size="sm">
            <Link>よくある質問</Link>
          </Text>
          <Text size="sm">
            <Link>サイトマップ</Link>
          </Text>
          <Text size="sm">
            <Link>個人情報保護の姿勢</Link>
          </Text>
          <Text size="sm">
            <Link>リンク</Link>
          </Text>
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
