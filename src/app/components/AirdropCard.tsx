export default function AirdropCard() {
  return (
    <div className='relative flex h-[582px] flex-col justify-between rounded-3xl bg-[#0158B5] p-16 text-base-white'>
      <img
        className='absolute bottom-0 right-19 top-18 z-0 w-[580px]'
        src='/images/home/airdrop-bg.png'
        alt='Airdrop Section'
      />
      <div className='flex h-18 w-18 items-center justify-center rounded-full bg-background-component px-5 py-6'>
        <span className='text-2xl'>🇺🇦</span>
      </div>
      <div className='z-10 flex max-w-[820px] flex-col gap-6'>
        <p className='text-subtitle1 text-[#F6CF02]'>Programmable Airdrop</p>
        <p className='text-h4 max-w-[720px]'>
          The beta launch is focused on distributing tokens to Ukrainian
          citizens
        </p>
        <p className='text-body2 opacity-50'>
          This airdrop is part of a humanitarian effort to help direct funds
          towards Ukraine. It showcases Rarimo’s identity infrastructure. and
          how it can be used by projects and organizations to directly reach
          civilians.
        </p>
        <div className='mt-4 flex gap-10'>
          <img
            src='/images/home/glo-dollar-logo.svg'
            alt='Glo Dollar'
            className='h-5'
          />
          <img src='/images/home/usdc-logo.svg' alt='USDC' className='h-5' />
        </div>
      </div>
    </div>
  )
}
