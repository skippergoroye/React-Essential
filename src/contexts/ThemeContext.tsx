"use client"
import { createContext, useState, useContext } from "react"


type Theme = "dark" | "light";


type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}



const ThemeContext = createContext<ThemeContextType | null>(null)


export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")



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

// Custom Hook
export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if(!context) {
    throw new Error("Failed to get context")
  }
  
  return context
}
