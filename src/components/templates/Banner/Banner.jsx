import React, { useEffect } from "react"
import "./Banner.scss"

import Title from "../../atoms/Title/Title"
import Section from "../../atoms/Section/Section"

const Banner = () => {
  useEffect(() => {
    const handleLoad = () => {
      const banner = document.querySelector(".banner")
      banner.innerHeight = window.innerHeight
      let mobnavbarheight = 0
      if (window.innerWidth <= 470) {
        mobnavbarheight = 40
      }
      const computedbanner = window.getComputedStyle(banner)
      const padding =
        parseInt(computedbanner.paddingTop, 10) +
        parseInt(computedbanner.paddingBottom, 10)
      const homenavbar = document.querySelector("#homenavbar")
      const totalHeight = homenavbar.clientHeight
      console.log(padding, totalHeight)
      banner.style.height = `${
        banner.innerHeight - totalHeight - padding - mobnavbarheight
      }px`
    }

    handleLoad()
  }, [])
  return (
    <Section className="banner transparent">
      <Title size={1} className="banner-title">
        ひらめきから、ビジネスまで。
      </Title>
      <Title size={5} className="banner-description">
        私たちは、着想段階から、研究成果の事業化を共に創る
        知的財産のプロデューサーです
      </Title>
    </Section>
  )
}

export default Banner
