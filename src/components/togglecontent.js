import React, { Fragment } from "react"
import { DiSass } from "react-icons/di"
import { FcFolder, FcOpenedFolder } from "react-icons/fc"
import { VscChevronDown, VscChevronRight, VscMarkdown } from "react-icons/vsc"

const ToggleContent = ({ state, type, text }) => {
  switch (type) {
    case "button":
      if (state) {
        return (
          <Fragment>
            <VscChevronDown />
            <FcOpenedFolder />
            &nbsp;{text}
          </Fragment>
        )
      } else {
        return (
          <Fragment>
            <VscChevronRight />
            <FcFolder />
            &nbsp;{text}
          </Fragment>
        )
      }
    case "markdown":
      return (
        <Fragment>
          <VscMarkdown />
          &nbsp;{text}
        </Fragment>
      )
    case "sass":
      return (
        <Fragment>
          <DiSass />
          &nbsp;{text}
        </Fragment>
      )
    default:
      return { text }
  }
}

export default ToggleContent
