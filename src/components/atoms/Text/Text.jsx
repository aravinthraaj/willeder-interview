import React from "react"
import "./Text.scss"

const Text = ({ children, size = "sm", className, ...props }) => {
  return (
    <p className={`text text--${size} ${className}`} {...props}>
      {children}
    </p>
  )
}

export default Text
