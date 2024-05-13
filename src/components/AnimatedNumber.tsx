'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useIntersection } from 'react-use'

interface Props {
  className?: string
  value: number
  duration?: number
}

export default function AnimatedNumber({
  className,
  value,
  duration = 2000,
}: Props) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const intersection = useIntersection(rootRef, { threshold: 1 })

  const [displayValue, setDisplayValue] = useState(value)
  const [isAnimated, setIsAnimated] = useState(false)

  const formattedDisplayValue = useMemo(() => {
    return new Intl.NumberFormat('en-US').format(displayValue)
  }, [displayValue])

  useEffect(() => {
    if (isAnimated || !intersection?.isIntersecting) return

    let start: number
    let raf: number

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / duration, 1)
      setDisplayValue(Math.floor(value * percentage))

      if (progress < duration) {
        raf = requestAnimationFrame(step)
      } else {
        setIsAnimated(true)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value, duration, intersection?.isIntersecting, isAnimated])

  return (
    <span ref={rootRef} className={className}>
      {formattedDisplayValue}
    </span>
  )
}
