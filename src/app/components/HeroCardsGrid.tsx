'use client'

import { FC, useEffect, useMemo, useState } from 'react'

import AirdropIcon from '@/assets/icons/airdrop-icon.svg'
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg'
import CheckIcon from '@/assets/icons/check-icon.svg'
import IdCardIcon from '@/assets/icons/id-card-icon.svg'
import MessageIcon from '@/assets/icons/message-icon.svg'
import StarIcon from '@/assets/icons/star-icon.svg'
import { useWindowScroll } from '@/contexts/window-scroll'
import { Container } from '@/ui'

import HeroCard from './HeroCard'

interface Card {
  title: string
  IconComponent: FC
  variant: 'black' | 'white' | 'green'
  size: 'small' | 'medium'
  className?: string
  position: { top: number; left: number }
  shakeCoeff: number
}

const cards: Card[] = [
  {
    title: 'SIGN IN',
    IconComponent: ArrowRightIcon,
    variant: 'green',
    size: 'small',
    position: { top: 0.1, left: 0.08 },
    shakeCoeff: 1,
  },
  {
    title: 'IDENTITY PROOFS',
    IconComponent: IdCardIcon,
    variant: 'white',
    size: 'medium',
    position: { top: 0.4, left: 0 },
    shakeCoeff: 0.5,
  },
  {
    title: 'VOTING',
    IconComponent: CheckIcon,
    variant: 'black',
    size: 'small',
    position: { top: 0.7, left: 0.07 },
    shakeCoeff: 0.8,
  },
  {
    title: 'REVIEWS',
    IconComponent: StarIcon,
    variant: 'black' as const,
    size: 'small' as const,
    position: { top: 0.1, left: 0.92 },
    shakeCoeff: 0.9,
  },
  {
    title: 'MESSAGING',
    IconComponent: MessageIcon,
    variant: 'green' as const,
    size: 'medium' as const,
    position: { top: 0.4, left: 0.95 },
    shakeCoeff: 1.2,
  },
  {
    title: 'AIRDROPS',
    IconComponent: AirdropIcon,
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
    <div className='fixed top-32 hidden h-[calc(100vh-128px)] w-screen xl:flex 3xl:hidden'>
      <Container
        className='sticky left-0 top-0 flex h-full w-full'
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
      </Container>
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
          IconComponent={card.IconComponent}
          variant={card.variant}
          size={card.size}
          data-aos='fade-up'
          data-aos-delay={index * 100 + 200}
        />
      </div>
    </div>
  )
}
