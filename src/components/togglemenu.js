import React from "react"
import ToggleContent from "./togglecontent"

const ToggleMenu = ({ open, menuItems }) => {
  const items = menuItems.map(({ name, link, type }, index) => {
    return (
      <li key={index}>
        <a href={link}>
          <ToggleContent state={open} type={type} text={name} />
        </a>
      </li>
    )
  })
  return <ul className={open ? "show" : ""}>{items}</ul>
}

export default ToggleMenu
