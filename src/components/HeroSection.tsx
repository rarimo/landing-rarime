'use client'

import { MouseEvent, useMemo, useState } from 'react'

import { useWindowScroll } from '@/hooks/window-scroll'

import AppStoreLinks from './AppStoreLinks'
import HeroCard from './HeroCard'

export default function HeroSection() {
  const [moveDelta, setMoveDelta] = useState({ x: 0, y: 0 })
  const { scrollY } = useWindowScroll()

  const handleMouseMove = (event: MouseEvent) => {
    const maxXDelta = 40
    const maxYDelta = 40

    const xCenter = window.innerWidth / 2
    const yCenter = window.innerHeight / 2

    setMoveDelta({
      x: ((xCenter - event.clientX) / xCenter) * -maxXDelta,
      y: ((yCenter - event.clientY) / yCenter) * -maxYDelta,
    })
  }

  const blockOpacity = useMemo(() => {
    const OPACITY_THRESHOLD = 600
    return Math.max(0, 1 - scrollY / OPACITY_THRESHOLD)
  }, [scrollY])

  const cardsScale = useMemo(() => {
    const SCALE_THRESHOLD = 1000
    return Math.min(1, Math.max(0, 1 - scrollY / SCALE_THRESHOLD))
  }, [scrollY])

  return (
    <>
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

      <div
        className='fixed top-32 flex h-screen w-screen'
        style={{
          transform: `scale(${cardsScale})`,
          opacity: blockOpacity,
        }}
      >
        <div className='container relative'>
          <div
            className='absolute flex h-full w-full'
            onMouseMove={handleMouseMove}
            style={{
              transition: 'transform 300ms linear',
              transform: `translate(${-moveDelta.x}px, ${-moveDelta.y}px) scale(${cardsScale})`,
            }}
          >
            <div
              className='sticky top-0 flex flex-col gap-20'
              data-aos='fade-up'
            >
              <HeroCard
                className='ml-2'
                title='SIGN IN'
                icon='/icons/arrow-right-icon.svg'
                variant='green'
                size='small'
              />
              <HeroCard
                className='-ml-18'
                title='IDENTITY PROOFS'
                icon='/icons/id-card-icon.svg'
                variant='white'
                size='medium'
              />
              <HeroCard
                className='ml-10'
                title='VOTING'
                icon='/icons/check-icon.svg'
                variant='black'
                size='small'
              />
            </div>

            <div
              className='sticky top-0 ml-auto flex w-60 flex-col gap-20'
              data-aos='fade-up'
            >
              <HeroCard
                className='ml-auto mr-4'
                title='REVIEWS'
                icon='/icons/star-icon.svg'
                variant='black'
                size='small'
              />
              <HeroCard
                className='-mr-16 ml-auto'
                title='MESSAGING'
                icon='/icons/message-icon.svg'
                variant='green'
                size='medium'
              />
              <HeroCard
                className='ml-8'
                title='AIRDROPS'
                icon='/icons/airdrop-icon.svg'
                variant='white'
                size='small'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
