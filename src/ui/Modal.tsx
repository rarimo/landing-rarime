'use client'
import { HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'

import CloseIcon from '@/assets/icons/close-icon.svg'
import ClientOnly from '@/common/ClientOnly'
import { cn } from '@/theme/utils'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose, children, ...rest }: Props) {
  return (
    <ClientOnly>
      {() =>
        createPortal(
          <div
            className={cn(
              'fixed left-0 top-0 z-[100] flex h-screen w-screen bg-white transition-all duration-300 ease-in-out',
              isOpen
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-full opacity-60',
            )}
            {...rest}
          >
            <button
              className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background-component sm:right-8 sm:top-8 lg:right-16 lg:top-12'
              onClick={onClose}
            >
              <CloseIcon className='h-5' />
            </button>
            {children}
          </div>,
          document.body,
        )
      }
    </ClientOnly>
  )
}
