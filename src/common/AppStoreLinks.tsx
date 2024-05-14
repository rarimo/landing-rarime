import { cn } from '@/theme'

export default function AppStoreLinks({ className }: { className?: string }) {
  const links = [
    {
      label: 'App Store',
      // TODO: Update App Store link
      href: 'https://www.apple.com/app-store/',
      img: '/images/app-store.svg',
    },
    {
      label: 'Google Play',
      // TODO: Update Google Play link
      href: 'https://play.google.com/store',
      img: '/images/google-play.svg',
    },
  ]

  return (
    <div className={cn('flex gap-4', className)}>
      {links.map(({ label, href, img }, index) => (
        <a
          key={index}
          href={href}
          target='_blank'
          rel='noreferrer'
          className=''
        >
          <img className='h-10' src={img} alt={label} />
        </a>
      ))}
    </div>
  )
}
