import React from "react"
import "./Banner.scss"
import Title from "../../atoms/Title/Title"
import Section from "../../atoms/Section/Section"

const Banner = () => {
  return (
    <Section className="banner transparent">
      <Title size={1} className="banner-title">ひらめきから、ビジネスまで。</Title>
      <Title size={5} className="banner-description">
        私たちは、着想段階から、研究成果の事業化を共に創る
        知的財産のプロデューサーです
      </Title>
    </Section>
  )
}

export default Banner
