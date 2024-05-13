'use client'

import { useEffect, useState } from 'react'

export function useWindowScroll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setScrollY(window.scrollY)

    const handleWindowScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleWindowScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

  return { scrollY }
}
