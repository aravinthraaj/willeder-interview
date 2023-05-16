import React, { useRef } from "react"
import "./Section.scss"

const Section = ({ sectionId, children, ...props }) => {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} id={sectionId} {...props}>
      <div className="container">{children}</div>
    </section>
  )
}

export default Section
