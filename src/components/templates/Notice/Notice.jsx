import React from "react"
import PropTypes from "prop-types"
import "./Notice.scss"

import Section from "../../atoms/Section/Section"
import Title from "../../atoms/Title/Title"
import NoticeList from "../../organisms/NoticeList/NoticeList"

import { notices } from "../../../constants/constants"

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

Notice.propTypes = {
  sectionId: PropTypes.string.isRequired,
}

export default Notice
