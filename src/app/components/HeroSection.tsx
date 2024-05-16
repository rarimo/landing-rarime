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
    <div>
      <HeroCardsGrid />
      <div className='container mt-21 lg:mt-36 2xl:mt-56' data-aos='fade-up'>
        <div
          className='mx-auto flex max-w-[480px] flex-col gap-30 lg:max-w-none'
          style={{ opacity: blockOpacity }}
        >
          <div className='mx-auto flex flex-col items-center gap-4 text-center'>
            <span className='text-overline1 mx-auto w-max rounded-full bg-primary-base px-4 py-2 text-base-black'>
              RARIME APP
            </span>
            <h1 className='text-h2 lg:text-h1 text-text-primary'>
              GO INCOGNITO
            </h1>
            <p className='text-body2 lg:text-body1 max-w-[720px] text-text-secondary'>
              RariMe is a self-custody identity wallet that allows users to
              verify their eligibility for Web3 services without exposing their
              personal data
            </p>
            <AppStoreLinks className='mt-4' />
          </div>
        </div>
      </div>
      <div className='3xl:relative 3xl:mt-40 mt-20 lg:absolute lg:bottom-10 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2'>
        <div className='flex flex-col items-center gap-1' data-aos='fade-up'>
          <p className='text-center text-xs text-text-secondary'>Scroll</p>
          <ArrowsIcon className='h-5 w-5 animate-bounce text-text-secondary' />
        </div>
      </div>
    </div>
  )
}
