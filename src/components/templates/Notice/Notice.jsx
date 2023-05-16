import React from "react"
import Section from "../../atoms/Section/Section"
import NoticeList from "../../organisms/NoticeList/NoticeList"
import Title from "../../atoms/Title/Title"
import { notices } from "../../../constants/constants"
import "./Notice.scss"

const Notice = ({ sectionId }) => {
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
