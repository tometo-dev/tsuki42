import React, { useState, useMemo } from "react"
import { ThemeProvider } from "styled-components"
import colors from "constants/colors"

const CustomThemeContext = React.createContext()
CustomThemeContext.displayName = "Custom Theme Context"

const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("purple")
  const themeColors = colors[mode]

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
