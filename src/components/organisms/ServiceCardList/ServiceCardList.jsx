import React from "react"
import ServiceCard from "../../molecules/ServiceCard/ServiceCard"
import "./ServiceCardList.scss"
import imgSrc1 from "../../../assests/images/img1.png"

const ServiceCardList = () => {
  const serviceCardsData = [
    {
      image: imgSrc1,
      title: "事業創出までサポート",
      description:
        "新たな事業体を構築し、事業体に参画しながら、事業を創出・育成していきます。\n特許のみでなく、意匠・商標・著作権・ノウハウ等に加えて、研究者のアイデア・ネットワークも活用した事業化を推進します。",
    },
    {
      image: imgSrc1,
      title: "ライフサイエンスの領域に特化",
      description:
        "ライフサイエンスの事業化に必要なスキル（パートナー企業のマッチング、知的財産、研究開発、マーケテング、薬事等）を持つスタッフが実施します。特にスタートアップの設立、事業拡大を得意としています。",
    },
    {
      image: imgSrc1,
      title: "大学・企業とのネットワーク",
      description:
        "聖マリアンナ医科大学だけでなく、大学病院、中規模病院やクリニックと連携することで、さまざまな技術の事業化、最適な事業化パートナーのマッチングを行なっています。",
    },
  ]
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
