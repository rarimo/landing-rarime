'use client'

import { useEffect, useMemo, useState } from 'react'

import { useWindowScroll } from '@/contexts/window-scroll'

import HeroCard from './HeroCard'

interface Card {
  title: string
  icon: string
  variant: 'black' | 'white' | 'green'
  size: 'small' | 'medium'
  className?: string
  position: { top: number; left: number }
  shakeCoeff: number
}

const cards: Card[] = [
  {
    title: 'SIGN IN',
    icon: '/icons/arrow-right-icon.svg',
    variant: 'green',
    size: 'small',
    position: { top: 0.1, left: 0.08 },
    shakeCoeff: 1,
  },
  {
    title: 'IDENTITY PROOFS',
    icon: '/icons/id-card-icon.svg',
    variant: 'white',
    size: 'medium',
    position: { top: 0.4, left: 0 },
    shakeCoeff: 0.5,
  },
  {
    title: 'VOTING',
    icon: '/icons/check-icon.svg',
    variant: 'black',
    size: 'small',
    position: { top: 0.7, left: 0.07 },
    shakeCoeff: 0.8,
  },
  {
    title: 'REVIEWS',
    icon: '/icons/star-icon.svg',
    variant: 'black' as const,
    size: 'small' as const,
    position: { top: 0.1, left: 0.92 },
    shakeCoeff: 0.9,
  },
  {
    title: 'MESSAGING',
    icon: '/icons/message-icon.svg',
    variant: 'green' as const,
    size: 'medium' as const,
    position: { top: 0.4, left: 0.95 },
    shakeCoeff: 1.2,
  },
  {
    title: 'AIRDROPS',
    icon: '/icons/airdrop-icon.svg',
    variant: 'white' as const,
    size: 'small' as const,
    position: { top: 0.7, left: 0.9 },
    shakeCoeff: 0.4,
  },
]

export default function HeroCardsGrid() {
  const [shakeDelta, setShakeDelta] = useState({ x: 0, y: 0 })
  const { scrollY } = useWindowScroll()

  const offsetCoeff = useMemo(() => {
    const OFFSET_THRESHOLD = 800
    return Math.min(1, scrollY / OFFSET_THRESHOLD)
  }, [scrollY])

  const handleMouseMove = (event: Event) => {
    if (!(event instanceof MouseEvent)) return

    const MAX_X_DELTA = 20
    const MAX_Y_DELTA = 20

    const xCenter = window.innerWidth / 2
    const yCenter = window.innerHeight / 2

    setShakeDelta({
      x: ((xCenter - event.clientX) / xCenter) * MAX_X_DELTA,
      y: ((yCenter - event.clientY) / yCenter) * MAX_Y_DELTA,
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='fixed top-32 flex h-[calc(100vh-128px)] w-screen'>
      <div
        className='container pointer-events-none sticky left-0 top-0 flex h-full w-full'
        style={{ opacity: offsetCoeff > 0.95 ? 0 : 1 }}
      >
        {cards.map((card, index) => (
          <HeroCardWrapper
            key={index}
            card={card}
            index={index}
            offsetCoeff={offsetCoeff}
            shakeDelta={shakeDelta}
          />
        ))}
      </div>
    </div>
  )
}

function HeroCardWrapper({
  card,
  index,
  offsetCoeff,
  shakeDelta,
}: {
  card: Card
  index: number
  offsetCoeff: number
  shakeDelta: { x: number; y: number }
}) {
  const currentPosition = useMemo(() => {
    const center = 0.5
    const xOffset = offsetCoeff * (center - card.position.left)
    const yOffset = offsetCoeff * (center - card.position.top)

    return {
      x: card.position.left + xOffset,
      y: card.position.top + yOffset,
    }
  }, [card, offsetCoeff])

  const shakeTransform = useMemo(() => {
    const translate = {
      x: shakeDelta.x * card.shakeCoeff,
      y: shakeDelta.y * card.shakeCoeff,
    }
    return `translate(${translate.x}px, ${translate.y}px)`
  }, [shakeDelta, card])

  return (
    <div
      className='absolute -translate-x-1/2 -translate-y-1/2'
      style={{
        top: `${currentPosition.y * 100}%`,
        left: `${currentPosition.x * 100}%`,
      }}
    >
      <div style={{ transform: shakeTransform }}>
        <HeroCard
          className={card.className}
          title={card.title}
          icon={card.icon}
          variant={card.variant}
          size={card.size}
          data-aos='fade-up'
          data-aos-delay={index * 100 + 200}
        />
      </div>
    </div>
  )
}
