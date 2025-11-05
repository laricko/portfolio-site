"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
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

type SettingsState = {
  language: Language
  theme: Theme
  hasHydrated: boolean
}

type SettingsAction =
  | { type: "hydrate"; language: Language; theme: Theme }
  | { type: "setLanguage"; language: Language }
  | { type: "setTheme"; theme: Theme }

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined,
)

const LANGUAGE_STORAGE_KEY = "site-language"
const THEME_STORAGE_KEY = "site-theme"

const initialState: SettingsState = {
  language: "en",
  theme: "light",
  hasHydrated: false,
}

function settingsReducer(state: SettingsState, action: SettingsAction): SettingsState {
  switch (action.type) {
    case "hydrate":
      return {
        language: action.language,
        theme: action.theme,
        hasHydrated: true,
      }
    case "setLanguage":
      return {
        ...state,
        language: action.language,
      }
    case "setTheme":
      return {
        ...state,
        theme: action.theme,
      }
    default:
      return state
  }
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState)

  useEffect(() => {
    const storedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    ) as Language | null
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null

    dispatch({
      type: "hydrate",
      language: storedLanguage === "ru" ? "ru" : "en",
      theme: storedTheme === "dark" ? "dark" : "light",
    })
  }, [])

  useEffect(() => {
    if (!state.hasHydrated) return

    document.documentElement.setAttribute("lang", state.language)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, state.language)
  }, [state.hasHydrated, state.language])

  useEffect(() => {
    if (!state.hasHydrated) return

    document.documentElement.classList.toggle("dark", state.theme === "dark")
    localStorage.setItem(THEME_STORAGE_KEY, state.theme)
  }, [state.hasHydrated, state.theme])

  const value = useMemo(
    () => ({
      language: state.language,
      setLanguage: (lang: Language) =>
        dispatch({ type: "setLanguage", language: lang }),
      theme: state.theme,
      setTheme: (theme: Theme) => dispatch({ type: "setTheme", theme }),
    }),
    [state.language, state.theme],
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
