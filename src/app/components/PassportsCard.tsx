import PlayIcon from '@/assets/icons/play-icon.svg'

export default function PassportsCard() {
  return (
    <div className='relative flex h-[582px] flex-col justify-end rounded-3xl bg-secondary-base p-16 text-base-white'>
      <img
        className='absolute bottom-0 right-9 top-20 z-0 w-[880px]'
        src='/images/home/passport-bg.png'
        alt='Passports Section'
      />
      <div className='z-10 flex max-w-[840px] flex-col gap-10'>
        <div className='flex flex-col gap-6'>
          <p className='typo-subtitle1 opacity-50'>Passport Scan</p>
          <p className='typo-h4'>
            Convert identity documents into anonymous credentials, keeping your
            activities private and untraceable
          </p>
        </div>
        {/* TODO: Play demo */}
        <button className='button-large button-outlined w-max border-base-white'>
          <span>Play Demo</span>
          <PlayIcon className='h-5 w-5' />
        </button>
      </div>
    </div>
  )
}
