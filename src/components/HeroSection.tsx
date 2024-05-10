import AppStoreLinks from './AppStoreLinks'

export default function HeroSection() {
  return (
    <div className='container flex flex-col gap-30'>
      <div className='mx-auto mt-36 flex flex-col items-center gap-4 text-center'>
        <span className='typo-overline-1 mx-auto w-max rounded-full bg-primary-base px-4 py-2 text-base-black'>
          RARIME APP
        </span>
        <p className='typo-h2 text-text-primary'>No traceability</p>
        <h1 className='typo-h1 text-text-primary'>GO INCOGNITO</h1>
        <AppStoreLinks />
      </div>
      <div className='flex flex-col items-center gap-1'>
        <p className='typo-xs text-center text-text-secondary'>Scroll</p>
        <div className='h-4 w-4 rounded-full bg-text-secondary' />
      </div>
    </div>
  )
}
