import React from "react"
import "./ServiceCardList.scss"

import ServiceCard from "../../molecules/ServiceCard/ServiceCard"

import { serviceCardsData } from "../../../constants/constants"

const ServiceCardList = () => {
  
  return (
    <div className="service-card-list">
      {serviceCardsData.map((card, index) => (
        <ServiceCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  )
}

export default ServiceCardList
