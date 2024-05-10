export default function Header() {
  const headerLinks = [
    { label: 'Identity', href: '#' },
    { label: 'Points', href: '#' },
    { label: 'Proofs', href: '#' },
    { label: 'Whitepaper', href: '#' },
  ]

  return (
    <header className='container mt-4 flex justify-between py-2'>
      <div className='flex items-center gap-8'>
        <img className='h-8 w-8' src='/images/logo.svg' alt='Logo' />
        <div className='divider-v' />
        <div className='flex items-center gap-8'>
          {headerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className='typo-button-medium text-text-primary'
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <img className='h-5 w-5' src='/icons/globe-icon.svg' alt='Language' />
        <button className='button-medium button-outlined'>Dashboard</button>
      </div>
    </header>
  )
}
