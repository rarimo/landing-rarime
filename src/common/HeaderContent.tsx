import LogoIcon from '@/assets/icons/logo-icon.svg'
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
        <div className='flex items-center gap-8'>
          {headerLinks.map(({ label, href }) => (
            <a key={label} href={href} className='typo-button-medium'>
              {label}
            </a>
          ))}
        </div>
      </div>
      <a
        className={cn(
          'button-medium button-outlined',
          isDark && 'border-base-white',
        )}
        href='https://app.rarime.com'
        target='_blank'
        rel='noreferrer'
      >
        Dashboard
      </a>
    </div>
  )
}
