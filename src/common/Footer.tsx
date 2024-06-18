import RarimeIcon from '@/assets/icons/rarime-icon.svg'
import { documentationLinks, legalLinks, navLinks } from '@/constants/nav'
import { Container, Divider } from '@/ui'

import AppStoreLinks from './AppStoreLinks'

export default function Footer() {
  return (
    <footer data-aos='fade-up'>
      <Container>
        <Divider />
        <div className='my-10 flex flex-col-reverse items-center justify-between gap-8 lg:my-20 lg:flex-row lg:gap-10'>
          <div className='flex flex-col items-center gap-8 lg:items-start'>
            <a href='/#'>
              <RarimeIcon className='h-8 w-8' />
            </a>
            <div className='flex flex-col gap-4 text-center lg:gap-8 lg:text-left'>
              <p className='text-sm-normal text-text-primary'>
                <span>Powered by </span>
                <a
                  href='https://rarimo.com'
                  className='text-text-primary hover:underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Rarimo
                </a>
              </p>
              <p className='text-sm-normal text-text-secondary'>
                {new Date().getFullYear()} © All rights reserved
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr_1fr_auto]'>
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
            <div className='hidden flex-col gap-6 lg:flex'>
              <p className='text-subtitle4 text-text-primary'>Documentation</p>
              <div className='flex flex-col gap-4'>
                {documentationLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className='text-body3 text-text-secondary hover:text-text-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className='hidden flex-col gap-6 lg:flex'>
              <p className='text-subtitle4 text-text-primary'>Legal</p>
              <div className='flex flex-col gap-4'>
                {legalLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className='text-body3 text-text-secondary hover:text-text-primary'
                    target='_blank'
                    rel='noreferrer'
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
