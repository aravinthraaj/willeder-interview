import React from "react"
import PropTypes from "prop-types"
import "./Text.scss"

const Text = ({ children, size = "sm", className, ...props }) => {
  return (
    <p className={`text text--${size} ${className}`} {...props}>
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  className: PropTypes.string,
}

export default Text
