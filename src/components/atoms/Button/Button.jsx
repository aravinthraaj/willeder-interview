import React from "react"
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

export default Button
