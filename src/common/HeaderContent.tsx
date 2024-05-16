import LogoIcon from '@/assets/icons/logo-icon.svg'
import MenuIcon from '@/assets/icons/menu-icon.svg'
import { Sections } from '@/constants/sections'
import { cn } from '@/theme/utils'

export default function HeaderContent({ isDark = false }) {
  const headerLinks = [
    { label: 'Identity', href: `#${Sections.Identity}` },
    { label: 'Rewards', href: `#${Sections.Rewards}` },
    { label: 'Integrate', href: `#${Sections.Integrations}` },
  ]

  return (
    <div
      className={cn(
        'flex justify-between',
        isDark ? 'text-base-white' : 'text-text-primary',
      )}
    >
      <div className='flex items-center gap-10'>
        <a href='/#'>
          <LogoIcon className='h-8' />
        </a>
        <div className='hidden items-center gap-8 lg:flex'>
          {headerLinks.map(({ label, href }) => (
            <a key={label} href={href} className='text-button-medium'>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <a
          className={cn(
            'button-medium button-outlined w-30 lg:w-max',
            isDark && 'border-base-white',
          )}
          href='https://app.rarime.com'
          target='_blank'
          rel='noreferrer'
        >
          Dashboard
        </a>
        <button
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full bg-background-component lg:hidden',
            isDark && 'bg-white bg-opacity-5',
          )}
        >
          <MenuIcon className='h-5' />
        </button>
      </div>
    </div>
  )
}
