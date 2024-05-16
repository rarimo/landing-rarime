import { Sections } from '@/constants/sections'

export default function RewardsSection() {
  return (
    <div
      id={Sections.Rewards}
      className='container flex flex-col gap-12 lg:gap-20'
      data-aos='fade-up'
    >
      <div className='flex flex-col gap-4 lg:gap-6'>
        <h2 className='text-subtitle1 text-text-secondary'>Rewards</h2>
        <p className='text-h4 lg:text-h3 max-w-[860px] text-text-primary'>
          You get rewards for using the app and identity proofs across different
          ecosystems
        </p>
      </div>
      <div className='flex flex-col gap-6 md:grid md:grid-cols-2'>
        <div className='relative flex flex-col gap-6 rounded-xl bg-background-component p-6 lg:h-[450px] lg:gap-0 lg:p-8'>
          <h3 className='text-md-medium lg:text-lg-medium max-w-[428px] text-text-primary'>
            Receive exclusive airdrops via referral program
          </h3>
          <div className='bottom-10 left-10 right-10 lg:absolute'>
            <img src='/images/home/rewards-tasks.png' alt='Rewards Tasks' />
            <img
              className='animate-swing absolute bottom-8 right-4 h-12 lg:-right-6 lg:h-16'
              src='/images/home/coin.svg'
              alt='Coin'
            />
          </div>
        </div>
        <div className='relative flex flex-col gap-6 rounded-xl bg-background-component p-6 lg:h-[450px] lg:gap-0 lg:p-8'>
          <h3 className='text-md-medium lg:text-lg-medium max-w-[428px] text-text-primary'>
            Reach different levels and access special rewards
          </h3>
          <div className='bottom-10 left-10 right-10 lg:absolute'>
            <img src='/images/home/rewards-levels.png' alt='Rewards Levels' />
            <img
              className='animate-swing absolute bottom-6 right-2 h-16 lg:-right-4 lg:h-20'
              src='/images/home/gift.svg'
              alt='Gift'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
