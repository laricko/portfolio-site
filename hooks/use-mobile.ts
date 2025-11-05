// /hooks/use-mobile.ts
"use client"

import { useCallback, useRef, useSyncExternalStore } from "react"

const noop = () => {}

type MQL = MediaQueryList & {
  addListener?: (listener: (e: MediaQueryListEvent) => void) => void
  removeListener?: (listener: (e: MediaQueryListEvent) => void) => void
}

export function useIsMobile(breakpoint = 768): boolean {
  const query = `(max-width: ${breakpoint - 1}px)`
  const mqlRef = useRef<MQL | null>(null)

  const getMql = useCallback((): MQL | null => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return null
    }
    const current = mqlRef.current
    if (!current || current.media !== query) {
      mqlRef.current = window.matchMedia(query) as MQL
    }
    return mqlRef.current
  }, [query])

  const subscribe = useCallback((onStoreChange: () => void) => {
    const mql = getMql()
    if (!mql) return noop

    const handler = () => onStoreChange()

    // Modern API
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handler)
      return () => mql.removeEventListener?.("change", handler)
    }

    // Legacy Safari (<14)
    mql.addListener?.(handler)
    return () => mql.removeListener?.(handler)
  }, [getMql])

  const getSnapshot = useCallback(() => {
    const mql = getMql()
    return Boolean(mql?.matches)
  }, [getMql])

  // Server snapshot: always false to avoid SSR crashes; useSyncExternalStore handles hydration.
  const getServerSnapshot = useCallback(() => false, [])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
