import { Sections } from '@/constants/sections'

import AppStoreLinks from './AppStoreLinks'

export default function Footer() {
  const navLinks = [
    { label: 'Identity', href: `#${Sections.Identity}` },
    { label: 'Rewards', href: `#${Sections.Rewards}` },
    { label: 'Integrate', href: `#${Sections.Integrations}` },
  ]

  // TODO: Update links
  const dashboardLinks = [
    { label: 'Create new identity', href: '#' },
    { label: 'Import Identity', href: '#' },
  ]

  return (
    <footer className='container' data-aos='fade-up'>
      <div className='divider-h' />
      <div className='my-20 flex justify-between gap-20'>
        <div className='flex flex-col gap-8'>
          <a href='/#'>
            <img className='h-8 w-8' src='/images/logo-small.svg' alt='Logo' />
          </a>
          <p className='typo-sm text-text-primary'>Powered by Rarimo</p>
          <p className='typo-sm text-text-primary'>
            {new Date().getFullYear()} © All rights reserved
          </p>
        </div>
        <div className='grid grid-cols-[1fr_1fr_auto] gap-25'>
          <div className='flex flex-col gap-6'>
            <p className='typo-sm-medium text-text-primary'>Navigation links</p>
            <div className='flex flex-col gap-4'>
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className='typo-sm text-text-secondary'
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <p className='typo-sm-medium text-text-primary'>Dashboard</p>
            <div className='flex flex-col gap-4'>
              {dashboardLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className='typo-sm text-text-secondary'
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
