import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          // Don't render anything at compile time. Deferring rendering until we
          // know which theme to use on the client avoids incorrect initial
          // state being displayed.
          if (theme == null) {
            return null
          }
          return (
            <div class="theme-choice mt-4">
              <input
                id="themeChoice"
                class="theme-checkbox"
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />{" "}
              <label htmlFor="themeChoice" class="theme-switch">
                <span class="sr-only">Dark mode</span>
              </label>
            </div>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle
