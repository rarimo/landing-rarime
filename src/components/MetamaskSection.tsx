export default function MetamaskSection() {
  return (
    <div className='text-base-white bg-secondary-base container relative flex h-[582px] flex-col justify-between rounded-3xl p-16'>
      <img
        className='absolute bottom-0 right-9 top-19 z-0 w-[880px]'
        src='/images/metamask-bg.png'
        alt='MetaMask Snap'
      />
      <div className='flex items-center gap-4'>
        <img
          className='h-10 w-10'
          src='/images/metamask-logo.svg'
          alt='MetaMask logo'
        />
        <span className='typo-lg-bold'>MetaMask extension</span>
      </div>
      <div className='z-10 flex max-w-[840px] flex-col gap-10'>
        <div className='flex flex-col gap-6'>
          <p className='typo-h4'>
            Use your RariMe seamlessly across web3 via MetaMask
          </p>
          <p className='typo-subtitle1 opacity-50'>
            Your identity and crypto lives in a single place.
          </p>
        </div>
        <button className='button-medium button-primary h-12 w-max'>
          <img className='h-5 w-5' src='/images/logo.svg' alt='Play icon' />
          <span>Install RariMe Snap</span>
        </button>
      </div>
    </div>
  )
}
