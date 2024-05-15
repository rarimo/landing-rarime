'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

const WindowScrollContext = createContext({ scrollY: 0 })

export function WindowScrollProvider({ children }: { children: ReactNode }) {
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

  return (
    <WindowScrollContext.Provider value={{ scrollY }}>
      {children}
    </WindowScrollContext.Provider>
  )
}

export function useWindowScroll() {
  return useContext(WindowScrollContext)
}
