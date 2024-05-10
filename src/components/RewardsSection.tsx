export default function RewardsSection() {
  return (
    <div className='container flex flex-col gap-20'>
      <div className='flex flex-col gap-6'>
        <h2 className='typo-subtitle1 text-text-secondary'>Rewards</h2>
        <p className='typo-h3 max-w-[840px] text-text-primary'>
          You get rewards for using the app and your identity across different
          ecosystems
        </p>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className='relative flex h-[450px] flex-col rounded-xl bg-background-component p-8'>
          <h3 className='typo-lg-medium max-w-[428px] text-text-primary'>
            Receive exclusive airdrops by participating in the referral program
          </h3>
          <div className='absolute bottom-10 left-10 right-6'>
            <img
              className=''
              src='/images/rewards-tasks.png'
              alt='Rewards Tasks'
            />
          </div>
        </div>
        <div className='relative flex h-[450px] flex-col gap-3 rounded-xl bg-background-component p-8'>
          <h3 className='typo-lg-medium max-w-[428px] text-text-primary'>
            Reach different levels and gain special rewards
          </h3>
          <p className='typo-body3 text-text-secondary'>
            And access by RariMe and other ecosystem members
          </p>
          <div className='absolute bottom-10 left-10 right-6'>
            <img
              className=''
              src='/images/rewards-levels.png'
              alt='Rewards Levels'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
