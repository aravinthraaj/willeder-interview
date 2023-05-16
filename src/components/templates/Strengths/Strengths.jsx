import React from "react"
import PropTypes from "prop-types"
import Section from "../../atoms/Section/Section"
import Title from "../../atoms/Title/Title"
import "./Strengths.scss"
import ServiceCardList from "../../organisms/ServiceCardList/ServiceCardList"

const Strengths = ({ sectionId }) => {
  return (
    <Section sectionId={sectionId} className="strengths">
      <Title size={2} className="title">
        MPOの強み
      </Title>
      <ServiceCardList />
    </Section>
  )
}

Strengths.propTypes = {
  sectionId: PropTypes.string.isRequired,
}

export default Strengths
