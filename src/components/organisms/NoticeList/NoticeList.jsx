import React from "react"
import PropTypes from "prop-types"

import NoticeItem from "../../molecules/NoticeItem/NoticeItem"

const NoticeList = ({ notices }) => {
  return (
    <div className="notice-list">
      <div className="notice-items">
        {notices.map((notice, index) => (
          <NoticeItem
            key={index}
            date={notice.date}
            link={notice.link}
            text={notice.text}
          />
        ))}
      </div>
    </div>
  )
}

NoticeList.propTypes = {
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default NoticeList
