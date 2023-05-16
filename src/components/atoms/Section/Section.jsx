import React, { useRef } from "react"
import PropTypes from "prop-types"
import "./Section.scss"

const Section = ({ sectionId, children, ...props }) => {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} id={sectionId} {...props}>
      <div className="container">{children}</div>
    </section>
  )
}

Section.propTypes = {
  sectionId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
