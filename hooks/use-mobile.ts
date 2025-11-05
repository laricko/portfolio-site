
// /hooks/use-mobile.ts
"use client"

import { useCallback, useSyncExternalStore } from "react"

const noop = () => {}

/**
 * Simple client-side hook to detect "mobile" viewport.
 * Default breakpoint is 768px (returns true for widths < 768).
 */
export function useIsMobile(breakpoint = 768): boolean {
  const query = `(max-width: ${breakpoint - 1}px)`

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (typeof window === "undefined") {
        return noop
      }

      const mql = window.matchMedia(query)
      const handler = () => onStoreChange()

      if (mql.addEventListener) {
        mql.addEventListener("change", handler)
      } else {
        // fallback for older browsers
        // @ts-expect-error - legacy API present on Safari < 14
        mql.addListener(handler)
      }

      return () => {
        if (mql.removeEventListener) {
          mql.removeEventListener("change", handler)
        } else {
          // @ts-expect-error - legacy API present on Safari < 14
          mql.removeListener(handler)
        }
      }
    },
    [query]
  )

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") {
      return false
    }
    return window.matchMedia(query).matches
  }, [query])

  const getServerSnapshot = useCallback(() => false, [])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}