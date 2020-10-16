import React, { useState, useEffect } from "react"

import ToggleMenu from "./togglemenu"
import ToggleContent from "./togglecontent"

const Toggle = ({ id, itemType, menuItems, title, type }) => {
  // set the state of the toggle
  // initially closed
  const [open, setOpen] = useState(false)

  // monitor the state of the toggle
  // add/remove click event handler to the document
  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById(`container-${id}`)
      if (container.contains(target)) return
      setOpen(false)
    }

    document.addEventListener("click", clickHandler)

    // these functions clean up the event listeners
    return () => document.removeEventListener("click", clickHandler)
  })

  // same but for keypresses
  // if the esc key is pressed close the toggles
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return
      setOpen(false)
    }
    document.addEventListener("keydown", keyHandler)

    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <div id={`container-${id}`} className="menu-container">
      <button
        id={`button-${id}`}
        aria-expanded={open === true ? "true" : "false"}
        className={open === true ? "active" : ""}
        onClick={() => setOpen(!open)}
        title={title}
      >
        <ToggleContent state={open} type={type} text={title} />
      </button>
      <ToggleMenu open={open} menuItems={menuItems} />
    </div>
  )
}

export default Toggle
