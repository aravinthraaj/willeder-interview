import React from "react"
import PropTypes from "prop-types"
import Button from "../../atoms/Button/Button"
import "./HomeNavbar.scss"

const HomeNavbar = ({ sections }) => {
  return (
    <div className="homeNavbar">
      {sections.map((section) => (
        <Button
          key={section}
          variant="outlined"
          size="medium"
          onClick={() =>
            document
              .getElementById(section)
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {section}
        </Button>
      ))}
    </div>
  )
}

HomeNavbar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default HomeNavbar
