'use client'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
  children: () => ReactNode
}

export default function ClientOnly({ children }: Props) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? children() : null
}
