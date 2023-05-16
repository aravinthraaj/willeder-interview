import React from "react"
import Section from "../../atoms/Section/Section"
import NoticeList from "../../organisms/NoticeList/NoticeList"
import Title from "../../atoms/Title/Title"
import "./Notice.scss"

const Notice = ({ sectionId }) => {
  const notices = [
    { date: "2023.06.11", link: "#", text: "代表取締役社長交代のお知らせ" },
    { date: "2023.06.11", link: "#", text: "【ライフサイエンス新技術説明会～医療系大学～】開催のお知らせ　※このイベントは終了しました" },
    { date: "2023.06.11", link: "#", text: "【テクノトランスファーinかわさき2019】に出展します　※このイベントは終了しました" },
  ]
  return (
    <Section sectionId={sectionId} className="notice">
      <Title size={3} className="title">
        お知らせ
      </Title>
      <NoticeList notices={notices} />
    </Section>
  )
}

export default Notice
