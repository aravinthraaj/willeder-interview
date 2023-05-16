import React from "react"
import "./NoticeItem.scss"
import Title from "../../atoms/Title/Title"
import Link from "../../atoms/Link/Link"

const NoticeItem = ({ date, link, text }) => {
  return (
    <div className="notice-item">
      <Title size={4} className="notice-date mobile">
        {date}
      </Title>

      <Title size={4} className="notice-text">
        <Link href={link}>{text}</Link>
      </Title>
      {/* <Link className="text-trim">
        <Title size={4} href={link} className="notice-text">{text}</Title>
      </Link> */}
    </div>
  )
}

export default NoticeItem
