import { useMemo } from 'react'

import { cn } from '@/theme'

interface HeroCardProps {
  className?: string
  title: string
  icon: string
  variant: 'green' | 'white' | 'black'
  size: 'small' | 'medium'
}

export default function HeroCard({
  className,
  title,
  icon,
  variant,
  size,
}: HeroCardProps) {
  const variantClassName = useMemo(() => {
    switch (variant) {
      case 'green':
        return 'bg-primary-base text-base-black'
      case 'white':
        return 'bg-background-container border border-text-primary text-text-primary'
      case 'black':
        return 'bg-base-black text-base-white'
    }
  }, [variant])

  const sizeClassName = useMemo(() => {
    switch (size) {
      case 'small':
        return 'w-31'
      case 'medium':
        return 'w-39'
    }
  }, [size])

  return (
    <div
      className={cn(
        `flex flex-col items-center gap-8 rounded-lg py-5`,
        variantClassName,
        sizeClassName,
        className,
      )}
    >
      <img className='h-8 w-8' src={icon} alt={title} />
      <p className='typo-overline2'>{title}</p>
    </div>
  )
}
