import React, { useState, useMemo, useEffect, useCallback } from "react"
import { ThemeProvider } from "styled-components"
import colors from "constants/colors"

const CustomThemeContext = React.createContext()
CustomThemeContext.displayName = "Custom Theme Context"

const CustomThemeProvider = ({ children }) => {
  const [mode, rawSetMode] = useState("blue")
  const themeColors = colors[mode]

  const setMode = useCallback(
    (value) => {
      rawSetMode(value)
      window.localStorage.setItem("color-mode", value)
    },
    [rawSetMode]
  )

  useEffect(() => {
    let colorMode = window.localStorage.getItem("color-mode")
    if (colorMode && colorMode !== mode) {
      rawSetMode(colorMode)
    }
  }, [mode])

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode])

  return (
    <CustomThemeContext.Provider value={value}>
      <ThemeProvider theme={{ colors: themeColors }}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

const useCustomTheme = () => {
  const context = React.useContext(CustomThemeContext)

  if (context === undefined) {
    throw new Error(`useCustomTheme must be used inside CustomThemeProvider`)
  }
  return context
}

export { CustomThemeProvider, useCustomTheme }
