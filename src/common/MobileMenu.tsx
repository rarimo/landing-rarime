import ClientOnly from '@/common/ClientOnly'
import { documentationLinks, navLinks } from '@/constants/nav'
import { cn } from '@/theme/utils'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <ClientOnly>
      {() => (
        <>
          <div
            className={cn(
              'absolute bottom-0 left-0 z-50 flex w-screen origin-top translate-y-full flex-col items-center gap-6 bg-background-container p-16 transition-all duration-300 ease-in-out',
              isOpen ? 'scale-y-100' : 'scale-y-0',
            )}
          >
            {[...navLinks, ...documentationLinks].map(
              ({ label, href, isExternal }) => (
                <a
                  key={label}
                  href={href}
                  className='text-subtitle2 text-text-primary'
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'norefferer' : undefined}
                  onClick={onClose}
                >
                  {label}
                </a>
              ),
            )}
          </div>
          <div
            className={cn(
              'fixed left-0 top-20 z-40 h-screen w-screen bg-black bg-opacity-50 transition-all duration-300 ease-in-out',
              isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
            role='presentation'
            onClick={onClose}
          />
        </>
      )}
    </ClientOnly>
  )
}
