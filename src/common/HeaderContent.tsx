import { cn } from '@/theme'

export default function HeaderContent({ isDark = false }) {
  const headerLinks = [
    { label: 'Identity', href: '#' },
    { label: 'Rewards', href: '#' },
    { label: 'Integrate', href: '#' },
  ]

  return (
    <div
      className={cn(
        'flex justify-between',
        isDark ? 'text-base-white' : 'text-text-primary',
      )}
    >
      <div className='flex items-center gap-10'>
        <img
          className='h-8'
          src={isDark ? '/images/logo-light.svg' : '/images/logo.svg'}
          alt='Logo'
        />
        <div className='flex items-center gap-8'>
          {headerLinks.map(({ label, href }) => (
            <a key={label} href={href} className='typo-button-medium'>
              {label}
            </a>
          ))}
        </div>
      </div>
      <button
        className={cn(
          'button-medium button-outlined',
          isDark && 'border-base-white',
        )}
      >
        Dashboard
      </button>
    </div>
  )
}
