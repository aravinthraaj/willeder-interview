import React from "react"
import "./Link.scss"

const Link = ({ href, children }) => {
  return <a href={href}>{children}</a>
}

export default Link
