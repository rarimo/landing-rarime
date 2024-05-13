import AnimatedNumber from './AnimatedNumber'

export default function AboutSection() {
  return (
    <div className='container flex flex-col items-center' data-aos='fade-up'>
      <img src='/images/about-phone.png' alt='About Section' className='w-74' />
      <div className='-mt-40 flex max-w-[840px] flex-col items-center gap-20'>
        <div className='flex flex-col items-center gap-6'>
          <h2 className='typo-subtitle1 text-text-secondary'>About</h2>
          <p className='typo-h3 text-center text-text-primary'>
            Reclaim your online privacy as incognito, making your web activity
            invisible and unlinkable to you
          </p>
        </div>
        <div className='flex w-[400px] justify-between'>
          <div className='flex flex-col items-center gap-6'>
            <p className='typo-subtitle3 text-text-secondary'>Incognitos</p>
            <AnimatedNumber
              className='typo-h4 w-40 text-primary-dark'
              value={5924252}
            />
          </div>
          <div className='flex flex-col items-center gap-6'>
            <p className='typo-subtitle3 text-text-secondary'>Identifiers</p>
            <AnimatedNumber
              className='typo-h4 w-40 text-primary-dark'
              value={5924252}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
