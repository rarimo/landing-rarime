import { cn } from '@/theme/utils'

export default function AppStoreLinks({ className }: { className?: string }) {
  const links = [
    {
      label: 'App Store',
      href: 'https://apps.apple.com/app/rarime/id6503300598',
      img: '/images/app-store.svg',
    },
    {
      label: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.rarilabs.rarime',
      img: '/images/google-play.svg',
    },
  ]

  return (
    <div className={cn('flex h-max gap-4', className)}>
      {links.map(({ label, href, img }, index) => (
        <a
          key={index}
          href={href}
          target='_blank'
          rel='noreferrer'
          className='transition-transform duration-300 ease-in-out hover:scale-110'
        >
          <img className='h-10' src={img} alt={label} />
        </a>
      ))}
    </div>
  )
}
