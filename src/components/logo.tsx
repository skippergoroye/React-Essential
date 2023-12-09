"use client"
 
import { useThemeContext } from '@/contexts/ThemeContext'

export default function logo() {
  const { theme, setTheme} = useThemeContext()


  return (
    <div>Logo {theme}</div>
  )
}
