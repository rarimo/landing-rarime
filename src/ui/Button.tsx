import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType } from 'react'

const button = cva('flex items-center justify-center gap-2 rounded-full', {
  variants: {
    intent: {
      primary:
        'bg-primary-base text-base-black transition-colors hover:bg-primary-dark',
      outlined: 'border border-text-primary',
    },
    size: {
      medium: 'h-10 px-5 text-button-medium lg:h-8',
      large: 'h-12 px-8 text-button-large',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

type ButtonElementType = 'button' | 'a'
type Props<T extends ButtonElementType> = {
  as?: T
  variant?: 'primary' | 'outlined'
  size?: 'medium' | 'large'
} & VariantProps<typeof button> &
  ComponentProps<T>

export default function Button<T extends ButtonElementType = 'button'>({
  as = 'button' as T,
  intent,
  size,
  className,
  ...rest
}: Props<T>) {
  const Wrapper = as as ElementType
  return <Wrapper {...rest} className={button({ intent, size, className })} />
}
