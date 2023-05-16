import React from "react"
import PropTypes from "prop-types"
import "./Link.scss"

const Link = ({ href, children }) => {
  return <a href={href}>{children}</a>
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
