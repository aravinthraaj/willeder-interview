import React from "react"
import "./NoticeItem.scss"
import Title from "../../atoms/Title/Title"

const NoticeItem = ({ date, link, text }) => {
  return (
    <div className="notice-item">
      <Title size={4} className="notice-date mobile">
        {date}
      </Title>

      <Title size={4} className="notice-text">
        {/* <Link href={link}>{text}</Link> */}
        {text}
      </Title>
    </div>
  )
}

export default NoticeItem
