import { cn } from '@/theme/utils'

export default function AppStoreLinks({ className }: { className?: string }) {
  const links = [
    {
      label: 'App Store',
      // TODO: Update App Store link
      href: 'https://www.apple.com/app-store/',
      img: '/images/app-store.svg',
      isDisabled: true,
    },
    {
      label: 'Google Play',
      // TODO: Update Google Play link
      href: 'https://play.google.com/store',
      img: '/images/google-play.svg',
      isDisabled: true,
    },
  ]

  return (
    <div className={cn('flex h-max gap-4', className)}>
      {links.map(({ label, href, img, isDisabled }, index) => (
        <a
          key={index}
          href={href}
          target='_blank'
          rel='noreferrer'
          className={cn(
            'transition-transform duration-300 ease-in-out',
            isDisabled ? 'pointer-events-none opacity-50' : 'hover:scale-110',
          )}
        >
          <img className='h-10' src={img} alt={label} />
        </a>
      ))}
    </div>
  )
}
