export default function MetamaskSection() {
  return (
    <div className='container' data-aos='fade-up'>
      <div className='relative flex h-[582px] flex-col justify-between rounded-3xl bg-secondary-base p-16 text-base-white'>
        <img
          className='absolute bottom-0 right-9 top-19 z-0 w-[880px]'
          src='/images/home/metamask-bg.png'
          alt='MetaMask Snap'
        />
        <div className='flex items-center gap-4'>
          <img
            className='h-10 w-10'
            src='/images/integrations/metamask-logo.svg'
            alt='MetaMask logo'
          />
          <span className='typo-lg-bold'>MetaMask extension</span>
        </div>
        <div className='z-10 flex max-w-[700px] flex-col gap-10'>
          <div className='flex flex-col gap-6'>
            <p className='typo-h4'>
              Use your RariMe seamlessly across web3 via MetaMask
            </p>
            <p className='typo-subtitle1 opacity-50'>
              Your identity and crypto lives in a single place
            </p>
          </div>
          <a
            className='button-medium button-primary h-12 w-max'
            href='https://snaps.metamask.io/snap/npm/rarimo/rarime/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='h-5 w-5'
              src='/images/logo-small.svg'
              alt='RariMe logo'
            />
            <span>Install RariMe Snap</span>
          </a>
        </div>
      </div>
    </div>
  )
}
