'use client'

import { useMemo, useRef } from 'react'

import { useWindowScroll } from '@/hooks/window-scroll'

import AirdropCard from './AirdropCard'
import PassportsCard from './PassportsCard'

export default function CardsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useWindowScroll()

  const passportsScale = useMemo(() => {
    const SCALE_HEIGHT = 500
    const INITIAL_SCALE = 0.9

    const topOffset = containerRef.current?.offsetTop || 0
    const currentDelta = Math.max(0, scrollY - topOffset) / SCALE_HEIGHT

    return Math.min(1, INITIAL_SCALE + (1 - INITIAL_SCALE) * currentDelta)
  }, [scrollY])

  return (
    <div ref={containerRef} className='container flex flex-col gap-50'>
      <div className='sticky bottom-10 z-10'>
        <AirdropCard />
      </div>
      <div
        className='sticky bottom-5'
        style={{
          transform: `scale(${passportsScale})`,
          transformOrigin: 'center bottom',
        }}
      >
        <PassportsCard />
      </div>
    </div>
  )
}
