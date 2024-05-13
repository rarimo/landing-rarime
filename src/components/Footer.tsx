import AppStoreLinks from './AppStoreLinks'

export default function Footer() {
  const socialLinks = [
    {
      label: 'X',
      // TODO: Update X link
      href: 'https://x.com',
      img: '/images/x-logo.svg',
    },
    {
      label: 'Discord',
      // TODO: Update Discord link
      href: 'https://discord.com',
      img: '/images/discord-logo.svg',
    },
  ]

  const navLinks = [
    { label: 'Eligibility', href: '#' },
    { label: 'Whitepaper', href: '#' },
    { label: 'Terms and services ', href: '#' },
    { label: 'Privacy', href: '#' },
  ]

  const dashboardLinbks = [
    { label: 'Create new identity', href: '#' },
    { label: 'Import Identity', href: '#' },
  ]

  return (
    <footer className='container' data-aos='fade-up'>
      <div className='divider-h' />
      <div className='my-20 flex justify-between gap-20'>
        <div className='flex flex-col gap-8'>
          <img className='h-8 w-8' src='/images/logo-small.svg' alt='Logo' />
          <div className='flex flex-col gap-4'>
            <p className='typo-sm text-text-primary'>
              2024 © All rights reserved.
            </p>
            <div className='flex gap-4'>
              {socialLinks.map(({ label, href, img }, index) => (
                <a
                  key={index}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className=''
                >
                  <img className='h-6 w-6' src={img} alt={label} />
                </a>
              ))}
            </div>
          </div>
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
              {dashboardLinbks.map(({ label, href }) => (
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
