"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type Language = "en" | "ru"
export type Theme = "light" | "dark"

type SettingsContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined,
)

const LANGUAGE_STORAGE_KEY = "site-language"
const THEME_STORAGE_KEY = "site-theme"

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en"
    }

    const storedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    ) as Language | null
    return storedLanguage === "ru" ? "ru" : "en"
  })
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light"
    }

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
    return storedTheme === "dark" ? "dark" : "light"
  })

  useEffect(() => {
    document.documentElement.setAttribute("lang", language)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      theme,
      setTheme: setThemeState,
    }),
    [language, theme],
  )

  return (
    <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }

  return context
}
