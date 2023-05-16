import React from "react"
import PropTypes from "prop-types"
import "./Motto.scss"

import mpo_motto from "../../../assets/images/motto.png"

import Title from "../../atoms/Title/Title"
import Section from "../../atoms/Section/Section"
import Text from "../../atoms/Text/Text"

const Motto = ({ sectionId }) => {
  return (
    <Section sectionId={sectionId} className="motto">
      <Title size={2} className="title">
        産学における科学技術の橋渡しを行います
      </Title>
      <Text size={5} className="text">
        MPOはライフサイエンス分野に特化した専門性の高い知識・スキルを有しており、大学・医療機関・企業・スタートアップ・専門家との幅広いネットワークを活用し、知的財産の相談・発掘から事業化までをワンストップでご支援しています。
      </Text>
      <img src={mpo_motto} alt="MPO Motto" />
    </Section>
  )
}

Motto.propTypes = {
  sectionId: PropTypes.string.isRequired,
}

export default Motto
