import AppStoreLinks from './AppStoreLinks'
import HeroCard from './HeroCard'

export default function HeroSection() {
  return (
    <div
      className='container relative mt-36 flex flex-col gap-30'
      data-aos='fade-up'
    >
      <div className='mx-auto flex flex-col items-center gap-4 text-center'>
        <span className='typo-overline1 mx-auto w-max rounded-full bg-primary-base px-4 py-2 text-base-black'>
          RARIME APP
        </span>
        <p className='typo-h2 text-text-primary'>No traceability</p>
        <h1 className='typo-h1 text-text-primary'>GO INCOGNITO</h1>
        <AppStoreLinks />
      </div>
      <div className='flex flex-col items-center gap-1'>
        <p className='typo-xs text-center text-text-secondary'>Scroll</p>
        <img
          className='h-5 w-5 animate-bounce'
          src='/icons/arrows-icon.svg'
          alt='Scroll icon'
        />
      </div>

      <div className='absolute -left-12 -top-14 flex flex-col gap-20'>
        <HeroCard
          className='ml-12'
          title='SIGN IN'
          icon='/icons/arrow-right-icon.svg'
          variant='green'
          size='small'
        />
        <HeroCard
          title='IDENTITY PROOFS'
          icon='/icons/id-card-icon.svg'
          variant='white'
          size='medium'
        />
        <HeroCard
          className='ml-20'
          title='VOTING'
          icon='/icons/check-icon.svg'
          variant='black'
          size='small'
        />
      </div>

      <div className='absolute -right-12 -top-14 flex flex-col gap-20'>
        <HeroCard
          className='ml-20'
          title='REVIEWS'
          icon='/icons/star-icon.svg'
          variant='black'
          size='small'
        />
        <HeroCard
          className='ml-auto'
          title='MESSAGING'
          icon='/icons/message-icon.svg'
          variant='green'
          size='medium'
        />
        <HeroCard
          className='mr-40'
          title='AIRDROPS'
          icon='/icons/airdrop-icon.svg'
          variant='white'
          size='small'
        />
      </div>
    </div>
  )
}
