'use client'
import { useState } from 'react'

import CloseIcon from '@/assets/icons/close-icon.svg'
import LogoIcon from '@/assets/icons/logo-icon.svg'
import MenuIcon from '@/assets/icons/menu-icon.svg'
import { navLinks } from '@/constants/nav'
import { isMobile } from '@/helpers/device'
import { cn } from '@/theme/utils'
import { Button, Container, Divider } from '@/ui'

import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 mt-1' data-aos='fade-up'>
      <div
        className={cn(
          'bg-white pt-5 backdrop-blur-md',
          isMenuOpen ? 'bg-opacity-100' : 'bg-opacity-80',
        )}
      >
        <Container className='relative flex flex-col gap-4'>
          <div className='flex justify-between text-text-primary'>
            <div className='flex items-center gap-10'>
              <a href='/#'>
                <LogoIcon className='h-8' />
              </a>
            </div>
            <div className='flex items-center gap-4'>
              <div className='hidden items-center gap-8 lg:flex'>
                {navLinks.map(({ label, href }) => (
                  <a key={label} href={href} className='text-button-medium'>
                    {label}
                  </a>
                ))}
              </div>

              <Button
                as='a'
                intent='outlined'
                // TODO: Show the dashboard link when it's ready
                className='hidden w-30 lg:w-max'
                href='https://app.rarime.com'
                target='_blank'
                rel='noreferrer'
              >
                Dashboard
              </Button>
              <button
                className='flex h-10 w-10 items-center justify-center rounded-full bg-background-component lg:hidden'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <CloseIcon className='h-5' />
                ) : (
                  <MenuIcon className='h-5' />
                )}
              </button>
            </div>
          </div>
          <Divider />
          {isMobile() && (
            <MobileMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          )}
        </Container>
      </div>
    </header>
  )
}
