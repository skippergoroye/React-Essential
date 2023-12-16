"use client"
import { createContext, useState } from "react"


const ThemeContext = createContext(null)


export default function ThemeProvider ({children}) {
  const [theme, setTheme] = useState("light")



  const contextValue = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
