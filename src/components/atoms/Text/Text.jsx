import React from "react"
import './Text.scss'

const Text = ({ children,size="sm" }) => {
  return <p className={`text text--${size}`}>{children}</p>
}

export default Text
