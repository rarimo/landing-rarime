import RarimeIcon from '@/assets/icons/rarime-icon.svg'
import { Button, Container } from '@/ui'

export default function MetamaskSection() {
  return (
    <Container data-aos='fade-up'>
      <div className='relative flex h-[484px] flex-col justify-between rounded-xl bg-secondary-base px-6 py-8 text-base-white lg:h-[582px] lg:rounded-3xl lg:px-16 lg:py-16'>
        <img
          className='absolute right-0 top-2 z-0 w-full max-w-[280px] lg:right-9 lg:top-19 lg:max-w-[460px]'
          src='/images/home/metamask-bg.png'
          alt='MetaMask Snap'
        />
        <div className='flex items-center gap-4'>
          <img
            className='h-10 w-10'
            src='/images/integrations/metamask-logo.svg'
            alt='MetaMask logo'
          />
          <span className='hidden text-h6 lg:block'>MetaMask extension</span>
        </div>
        <div className='z-10 flex max-w-[640px] flex-col gap-6 lg:gap-10'>
          <div className='flex flex-col gap-4 lg:gap-6'>
            <p className='text-h5 lg:text-h4'>
              Use your RariMe seamlessly across web via MetaMask
            </p>
            <p className='text-subtitle3 opacity-50 lg:text-subtitle1'>
              Your identity and crypto live in a single place
            </p>
          </div>
          <Button
            as='a'
            className='!h-12 w-max'
            href='https://snaps.metamask.io/snap/npm/rarimo/rarime/'
            target='_blank'
            rel='noreferrer'
          >
            <RarimeIcon className='h-5 w-5' />
            <span>Install RariMe Snap</span>
          </Button>
        </div>
      </div>
    </Container>
  )
}
