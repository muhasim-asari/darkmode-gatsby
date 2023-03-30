import React from "react"
import * as styles from "./index.module.css"
import Sun from "../images/sun.svg"
import Moon from "../images/moon.svg"

function getDefaultTheme() {
  const savedTheme = window.localStorage.getItem("theme")
  return savedTheme ? savedTheme : "light"
}

export default function DarkMode() {
  const [isDark, setIsDark] = React.useState(getDefaultTheme())

  React.useEffect(() => {
    if (isDark === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
    window.localStorage.setItem("theme", isDark)
  }, [isDark])

  return (
    <div className="global-toggle-switch">
      <span onClick={() => setIsDark(isDark === "dark" ? "light" : "dark")}>
        {isDark === "dark" ? (
          <img src={Sun} alt="sun img" />
        ) : (
          <img src={Moon} alt="moon img" />
        )}
      </span>
    </div>
  )
}