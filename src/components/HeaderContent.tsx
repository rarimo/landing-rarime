import { cn } from '@/theme'

export default function HeaderContent({ isDark = false }) {
  const headerLinks = [
    { label: 'Identity', href: '#' },
    { label: 'Points', href: '#' },
    { label: 'Proofs', href: '#' },
    { label: 'Whitepaper', href: '#' },
  ]

  return (
    <div
      className={cn(
        'flex justify-between',
        isDark ? 'text-base-white' : 'text-text-primary',
      )}
    >
      <div className='flex items-center gap-8'>
        <img
          className='h-8 w-8'
          src={isDark ? '/images/logo-light.svg' : '/images/logo.svg'}
          alt='Logo'
        />
        <div className={cn('divider-v', isDark && 'bg-base-white opacity-5')} />
        <div className='flex items-center gap-8'>
          {headerLinks.map(({ label, href }) => (
            <a key={label} href={href} className='typo-button-medium'>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <img
          className='h-5 w-5'
          src={isDark ? '/icons/globe-icon-light.svg' : '/icons/globe-icon.svg'}
          alt='Language'
        />
        <button
          className={cn(
            'button-medium button-outlined',
            isDark && 'border-base-white',
          )}
        >
          Dashboard
        </button>
      </div>
    </div>
  )
}
