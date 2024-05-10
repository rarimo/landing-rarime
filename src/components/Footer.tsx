export default function Footer() {
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
    <footer className='container'>
      <div className='divider-h' />
      <div className='my-20 flex justify-between gap-20'>
        <div className='flex flex-col gap-8'>
          <div className='h-8 w-8 rounded-md bg-base-black' />
          <div className='flex flex-col gap-4'>
            <p className='typo-sm text-text-primary'>
              2024 © All rights reserved.
            </p>
            <div className='flex gap-4'>
              <div className='h-6 w-6 rounded-md bg-base-black' />
              <div className='h-6 w-6 rounded-md bg-base-black' />
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
          <div className='flex gap-4'>
            <div className='h-10 min-w-30 rounded-sm bg-base-black' />
            <div className='h-10 min-w-30 rounded-sm bg-base-black' />
          </div>
        </div>
      </div>
    </footer>
  )
}
