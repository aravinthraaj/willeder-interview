import React from "react"
import "./NoticeItem.scss"
import PropTypes from "prop-types"

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
    </div>
  )
}

NoticeItem.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NoticeItem
