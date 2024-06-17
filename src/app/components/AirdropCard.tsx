export default function AirdropCard() {
  return (
    <div className='relative flex h-[484px] flex-col justify-between overflow-hidden rounded-xl bg-[#0158B5] px-6 py-8 text-base-white lg:h-[582px] lg:rounded-3xl lg:px-16 lg:py-16'>
      <img
        className='absolute -right-20 top-8 z-0 w-[320px] lg:right-19 lg:top-18 lg:w-[580px]'
        src='/images/home/airdrop-bg.png'
        alt='Airdrop Section'
      />
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-background-component px-5 py-6 lg:h-18 lg:w-18'>
        <span className='text-2xl'>🇺🇦</span>
      </div>
      <div className='z-10 flex max-w-[820px] flex-col gap-4 lg:gap-6'>
        <p className='text-subtitle3 text-[#F6CF02] lg:text-subtitle1'>
          Programmable Airdrop
        </p>
        <p className='max-w-[720px] text-h5 lg:text-h4'>
          The beta launch includes the distribution of additional tokens to
          Ukrainian citizens
        </p>
        <p className='text-body3 opacity-50 lg:text-body2'>
          This airdrop is part of a humanitarian effort to help direct funds
          towards Ukraine. It showcases Rarimo’s identity infrastructure and how
          it can be used by projects and organizations to directly reach
          civilians
        </p>
        <div className='mt-2 flex items-center gap-4 lg:mt-4 lg:gap-10'>
          <p className='text-body3 opacity-50 lg:text-body2'>Distributing:</p>
          <img
            src='/images/home/glo-dollar-logo.svg'
            alt='Glo Dollar'
            className='h-5'
          />
          <div className='flex items-center gap-2'>
            <img src='/images/home/usdc-logo.svg' alt='USDC' className='h-5' />
            <span className='text-subtitle4 opacity-60'>USDC</span>
          </div>
        </div>
      </div>
    </div>
  )
}
