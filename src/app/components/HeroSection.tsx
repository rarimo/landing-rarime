'use client'

import { useMemo } from 'react'

import ArrowsIcon from '@/assets/icons/arrows-icon.svg'
import AppStoreLinks from '@/common/AppStoreLinks'
import { useWindowScroll } from '@/contexts/window-scroll'

import HeroCardsGrid from './HeroCardsGrid'

export default function HeroSection() {
  const { scrollY } = useWindowScroll()

  const blockOpacity = useMemo(() => {
    const OPACITY_SCROLL_HEIGHT = 600
    return Math.max(0, 1 - scrollY / OPACITY_SCROLL_HEIGHT)
  }, [scrollY])

  return (
    <>
      <HeroCardsGrid />
      <div className='container mt-36 2xl:mt-56' data-aos='fade-up'>
        <div
          className={'flex flex-col gap-30'}
          style={{ opacity: blockOpacity }}
        >
          <div className='mx-auto flex flex-col items-center gap-4 text-center'>
            <span className='typo-overline1 mx-auto w-max rounded-full bg-primary-base px-4 py-2 text-base-black'>
              RARIME APP
            </span>
            <h1 className='typo-h1 text-text-primary'>GO INCOGNITO</h1>
            <p className='typo-body1 max-w-[720px] text-text-secondary'>
              RariMe is a self-custody identity wallet that allows users to
              verify their eligibility for Web3 services without exposing their
              personal data
            </p>
            <AppStoreLinks className='mt-4' />
          </div>
        </div>
      </div>
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
        <div className='flex flex-col items-center gap-1' data-aos='fade-up'>
          <p className='typo-xs text-center text-text-secondary'>Scroll</p>
          <ArrowsIcon className='h-5 w-5 animate-bounce text-text-secondary' />
        </div>
      </div>
    </>
  )
}
