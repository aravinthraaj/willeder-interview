import React from 'react'
import NoticeItem from '../../molecules/NoticeItem/NoticeItem';

const NoticeList = ({ title, notices }) => {
  return (
    <div className="notice-list">
      {/* <h2 className="notice-list-title">{title}</h2> */}
      <div className="notice-items">
        {notices.map((notice, index) => (
          <NoticeItem key={index} date={notice.date} link={notice.link} text={notice.text} />
        ))}
      </div>
    </div>
  );
};


export default NoticeList