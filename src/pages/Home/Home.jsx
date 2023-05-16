import React from "react"

import Banner from "../../components/templates/Banner/Banner"
import HomeNavbar from "../../components/templates/HomeNavbar/HomeNavbar"
import Footer from "../../components/templates/Footer/Footer"
import Motto from "../../components/templates/Motto/Motto"
import Strengths from "../../components/templates/Strengths/Strengths"
import WhoWeAre from "../../components/templates/WhoWeAre/WhoWeAre"
import Notice from "../../components/templates/Notice/Notice"

import { sections } from "../../constants/constants"

const Home = () => {
  return (
    <>
      <Banner />
      <HomeNavbar sections={sections} />
      <Motto sectionId={"MPOとは"} />
      <Strengths sectionId={"MPOの強み"} />
      <WhoWeAre sectionId={"MPOとTLOとの違い"} />
      <Notice sectionId={"お知らせ"} />
      <Footer />
    </>
  )
}

export default Home
