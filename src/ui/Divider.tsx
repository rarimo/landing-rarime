import { HTMLAttributes } from 'react'

import { cn } from '@/theme/utils'

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical'
}

export default function Divider({
  className,
  direction = 'horizontal',
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      className={cn(
        'bg-background-component',
        direction === 'horizontal' ? ' h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
    />
  )
}
