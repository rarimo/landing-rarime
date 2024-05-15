import { Sections } from '@/constants/sections'

export default function RewardsSection() {
  return (
    <div
      id={Sections.Rewards}
      className='container flex flex-col gap-20'
      data-aos='fade-up'
    >
      <div className='flex flex-col gap-6'>
        <h2 className='typo-subtitle1 text-text-secondary'>Rewards</h2>
        <p className='typo-h3 max-w-[860px] text-text-primary'>
          You get rewards for using the app and identity proofs across different
          ecosystems
        </p>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className='relative flex h-[450px] flex-col rounded-xl bg-background-component p-8'>
          <h3 className='typo-lg-medium max-w-[428px] text-text-primary'>
            Receive exclusive airdrops via referral program
          </h3>
          <div className='absolute bottom-10 left-10 right-6'>
            <img
              className=''
              src='/images/home/rewards-tasks.png'
              alt='Rewards Tasks'
            />
          </div>
        </div>
        <div className='relative flex h-[450px] flex-col gap-3 rounded-xl bg-background-component p-8'>
          <h3 className='typo-lg-medium max-w-[428px] text-text-primary'>
            Reach different levels and access special rewards
          </h3>
          <div className='absolute bottom-10 left-10 right-6'>
            <img
              className=''
              src='/images/home/rewards-levels.png'
              alt='Rewards Levels'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
