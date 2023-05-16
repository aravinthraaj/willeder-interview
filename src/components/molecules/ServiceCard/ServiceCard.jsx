import React from "react"
import PropTypes from "prop-types"
import "./ServiceCard.scss"

import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"

const ServiceCard = ({ image, title, description, subTitle }) => {
  return (
    <div className="service-card">
      <div className="wrapper">
        <div className="service-card-img-container">
          <img src={image} alt={title} />
        </div>
        <div className="title-wrapper">
          <Title size={3} className="title">
            {title}
          </Title>
          <Title size={3} className="sub-title">
            {subTitle}
          </Title>
        </div>
      </div>

      <Text size="sm" className="text">
        {description}
      </Text>
    </div>
  )
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default ServiceCard
