import { ComponentProps, ElementType } from 'react'

import { cn } from '@/theme/utils'

type Props<T extends ElementType> = {
  as?: T
  variant?: 'primary' | 'outlined'
  size?: 'medium' | 'large'
} & ComponentProps<T>

export default function Button<T extends ElementType = 'button'>({
  as: Wrapper = 'button' as T,
  variant = 'primary',
  size = 'medium',
  className,
  ...rest
}: Props<T>) {
  return (
    <Wrapper
      {...rest}
      className={cn(
        'flex items-center justify-center gap-2 rounded-full',
        size === 'medium'
          ? 'h-10 px-5 text-button-medium lg:h-8'
          : 'h-12 px-8 text-button-large',
        variant === 'primary'
          ? 'bg-primary-base text-base-black transition-colors hover:bg-primary-dark'
          : 'border border-text-primary',
        className,
      )}
    />
  )
}
