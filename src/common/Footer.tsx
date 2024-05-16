import RarimeIcon from '@/assets/icons/rarime-icon.svg'
import { Sections } from '@/constants/sections'

import AppStoreLinks from './AppStoreLinks'

export default function Footer() {
  const navLinks = [
    { label: 'Identity', href: `#${Sections.Identity}` },
    { label: 'Rewards', href: `#${Sections.Rewards}` },
    { label: 'Integrate', href: `#${Sections.Integrations}` },
  ]

  return (
    <footer className='container' data-aos='fade-up'>
      <div className='divider-h' />
      <div className='my-20 flex justify-between gap-20'>
        <div className='flex flex-col gap-8'>
          <a href='/#'>
            <RarimeIcon className='h-8 w-8' />
          </a>
          <p className='text-sm-normal text-text-primary'>Powered by Rarimo</p>
          <p className='text-sm-normal text-text-secondary'>
            {new Date().getFullYear()} © All rights reserved
          </p>
        </div>
        <div className='grid grid-cols-[1fr_auto] gap-30'>
          <div className='flex flex-col gap-6'>
            <p className='text-subtitle4 text-text-primary'>Navigation links</p>
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
    </footer>
  )
}
