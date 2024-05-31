import { forwardRef, HTMLAttributes } from 'react'

import { cn } from '@/theme/utils'

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={cn('mx-auto w-full max-w-[1128px] px-5 xl:px-0', className)}
      />
    )
  },
)

export default Container
