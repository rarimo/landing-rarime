import LogoIcon from '@/assets/icons/logo-icon.svg'
import MenuIcon from '@/assets/icons/menu-icon.svg'
import { Sections } from '@/constants/sections'
import { Button, Container, Divider } from '@/ui'

export default function Header() {
  const headerLinks = [
    { label: 'Identity', href: `#${Sections.Identity}` },
    { label: 'Rewards', href: `#${Sections.Rewards}` },
    { label: 'Integrate', href: `#${Sections.Integrations}` },
  ]

  return (
    <header
      className='sticky top-0 z-50 mt-1 bg-white bg-opacity-80 pt-5 backdrop-blur-md'
      data-aos='fade-up'
    >
      <Container className='flex flex-col gap-4'>
        <div className='flex justify-between text-text-primary'>
          <div className='flex items-center gap-10'>
            <a href='/#'>
              <LogoIcon className='h-8' />
            </a>
            <div className='hidden items-center gap-8 lg:flex'>
              {headerLinks.map(({ label, href }) => (
                <a key={label} href={href} className='text-button-medium'>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              as='a'
              variant='outlined'
              className='w-30 lg:w-max'
              href='https://app.rarime.com'
              target='_blank'
              rel='noreferrer'
            >
              Dashboard
            </Button>
            <button className='flex h-10 w-10 items-center justify-center rounded-full bg-background-component lg:hidden'>
              <MenuIcon className='h-5' />
            </button>
          </div>
        </div>
        <Divider />
      </Container>
    </header>
  )
}
