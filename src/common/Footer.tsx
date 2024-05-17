import RarimeIcon from '@/assets/icons/rarime-icon.svg'
import { Sections } from '@/constants/sections'
import { Container, Divider } from '@/ui'

import AppStoreLinks from './AppStoreLinks'

export default function Footer() {
  const navLinks = [
    { label: 'Identity', href: `#${Sections.Identity}` },
    { label: 'Rewards', href: `#${Sections.Rewards}` },
    { label: 'Integrate', href: `#${Sections.Integrations}` },
  ]

  return (
    <footer data-aos='fade-up'>
      <Container>
        <Divider />
        <div className='my-10 flex flex-col-reverse items-center justify-between gap-8 lg:my-20 lg:flex-row lg:gap-20'>
          <div className='flex flex-col items-center gap-8 lg:items-start'>
            <a href='/#'>
              <RarimeIcon className='h-8 w-8' />
            </a>
            <div className='flex flex-col gap-4 text-center lg:gap-8 lg:text-left'>
              <p className='text-sm-normal text-text-primary'>
                Powered by Rarimo
              </p>
              <p className='text-sm-normal text-text-secondary'>
                {new Date().getFullYear()} © All rights reserved
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-30 lg:grid-cols-[1fr_auto]'>
            <div className='hidden flex-col gap-6 lg:flex'>
              <p className='text-subtitle4 text-text-primary'>
                Navigation links
              </p>
              <div className='flex flex-col gap-4'>
                {navLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className='text-body3 text-text-secondary hover:text-text-primary'
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <AppStoreLinks />
          </div>
        </div>
      </Container>
    </footer>
  )
}
