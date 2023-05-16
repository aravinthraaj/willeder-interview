import React from "react"
import PropTypes from "prop-types"
import "./Button.scss"

const Button = ({
  variant = "filled",
  size = "large",
  borderRadius = variant === "rounded" ? "50px" : "0px",
  children,
  color="secondary",
  ...props
}) => {
  return (
    <button
      className={`button button--${variant} button--${size} button--${color}`}
      style={{ borderRadius }}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  borderRadius: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}


export default Button
