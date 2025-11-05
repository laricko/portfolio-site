
// /hooks/use-mobile.ts
"use client"

import { useEffect, useState } from "react"

/**
 * Simple client-side hook to detect "mobile" viewport.
 * Default breakpoint is 768px (returns true for widths < 768).
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = (ev: MediaQueryListEvent) => setIsMobile(ev.matches)

    // modern API
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange)
    } else {
      // fallback for older browsers
      // @ts-ignore - legacy API
      mql.addListener(onChange)
    }

    // ensure initial value is correct
    setIsMobile(mql.matches)

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange)
      } else {
        // @ts-ignore - legacy API
        mql.removeListener(onChange)
      }
    }
  }, [breakpoint])

  return isMobile
}