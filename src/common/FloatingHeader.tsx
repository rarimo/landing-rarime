'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/theme/utils'

import HeaderContent from './HeaderContent'

const FLOATING_HEADER_THRESHOLD = 100

export default function FloatingHeader() {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsShown(window.scrollY > FLOATING_HEADER_THRESHOLD)
    }

    window.addEventListener('scroll', handleWindowScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        'duration-600 fixed top-4 z-50 w-full transition-transform duration-500',
        isShown ? 'translate-y-0' : '-translate-y-40',
      )}
    >
      <div className='container rounded-full bg-text-primary px-4 py-2'>
        <HeaderContent isDark />
      </div>
    </div>
  )
}
