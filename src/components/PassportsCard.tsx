export default function PassportsCard() {
  return (
    <div className='relative flex h-[582px] flex-col justify-end rounded-3xl bg-secondary-base p-16 text-base-white'>
      <img
        className='absolute bottom-0 right-9 top-20 z-0 w-[880px]'
        src='/images/passport-bg.png'
        alt='Passports Section'
      />
      <div className='z-10 flex max-w-[840px] flex-col gap-10'>
        <div className='flex flex-col gap-6'>
          <p className='typo-subtitle1 opacity-50'>Passports Scan</p>
          <p className='typo-h4'>
            Convert existing identity documents into anonymous credentials
            independently and without anyone able to trace your activities
          </p>
        </div>
        <button className='button-large button-outlined w-max border-base-white'>
          <span>Play Demo</span>
          <img src='/icons/play-icon.svg' alt='Play icon' />
        </button>
      </div>
    </div>
  )
}
