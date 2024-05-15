import { FC, HTMLAttributes, useMemo } from 'react'

import { cn } from '@/theme/utils'

interface HeroCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  title: string
  IconComponent: FC<{ className: string }>
  variant: 'green' | 'white' | 'black'
  size: 'small' | 'medium'
}

export default function HeroCard({
  className,
  title,
  IconComponent,
  variant,
  size,
  ...rest
}: HeroCardProps) {
  const variantClassName = useMemo(() => {
    switch (variant) {
      case 'green':
        return 'bg-primary-base text-base-black'
      case 'white':
        return 'bg-base-white border border-text-primary text-base-black'
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
      {...rest}
    >
      <IconComponent className='h-8 w-8' />
      <p className='typo-overline2'>{title}</p>
    </div>
  )
}
