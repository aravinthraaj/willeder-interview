import React from "react"
import Section from "../../atoms/Section/Section"
import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"
import whoweare from "../../../assests/images/whoweare.png"
import "./WhoWeAre.scss"

const WhoWeAre = ({ sectionId }) => {
  return (
    <Section sectionId={sectionId} className="whoweare">
      <Title size={2} className="title">MPOは、ただの技術移転機関 (TLO)ではありません</Title>
      <Text className="text">
        研究者や医療従事者のニーズ・シーズからビジネスモデル、開発戦略、知的戦略を策定し、事業化パートナーを組み合わせることで新たな事業体（例：スタートアップ）を構築します。そして、事業体に参画しながら、新規事業を創出・育成していきます。MPOは、技術移転機関としてライセンス先の探索も行いますが、技術移転の先まで支援する、一歩進んだ体制でサポートします。{" "}
      </Text>
      <img src={whoweare} alt="Who we are" />
    </Section>
  )
}

export default WhoWeAre
