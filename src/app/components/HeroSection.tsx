'use client'

import { useMemo } from 'react'

import AppStoreLinks from '@/common/AppStoreLinks'
import { useWindowScroll } from '@/hooks/window-scroll'

import HeroCardsGrid from './HeroCardsGrid'

export default function HeroSection() {
  const { scrollY } = useWindowScroll()

  const blockOpacity = useMemo(() => {
    const OPACITY_THRESHOLD = 600
    return Math.max(0, 1 - scrollY / OPACITY_THRESHOLD)
  }, [scrollY])

  return (
    <>
      <HeroCardsGrid />
      <div className='container mt-36' data-aos='fade-up'>
        <div
          className={'flex flex-col gap-30'}
          style={{ opacity: blockOpacity }}
        >
          <div className='mx-auto flex flex-col items-center gap-4 text-center'>
            <span className='typo-overline1 mx-auto w-max rounded-full bg-primary-base px-4 py-2 text-base-black'>
              RARIME APP
            </span>
            <p className='typo-h2 text-text-primary'>No traceability</p>
            <h1 className='typo-h1 text-text-primary'>GO INCOGNITO</h1>
            <AppStoreLinks className='mt-4' />
          </div>
          <div className='flex flex-col items-center gap-1'>
            <p className='typo-xs text-center text-text-secondary'>Scroll</p>
            <img
              className='h-5 w-5 animate-bounce'
              src='/icons/arrows-icon.svg'
              alt='Scroll icon'
            />
          </div>
        </div>
      </div>
    </>
  )
}
