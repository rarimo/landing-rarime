'use client'

import AnimatedNumber from '@/common/AnimatedNumber'
import { Sections } from '@/constants/sections'
import { calculateProgressiveNumber } from '@/utils/number'

export default function AboutSection() {
  const incognitosValue = calculateProgressiveNumber({
    startNumber: 23924,
    startDate: new Date('2024-05-13'),
    range: { min: 150, max: 320 },
  })

  const identifiersValue = calculateProgressiveNumber({
    startNumber: 81055,
    startDate: new Date('2024-05-13'),
    range: { min: 260, max: 530 },
  })

  return (
    <div
      id={Sections.Identity}
      className='container mt-60 flex flex-col items-center'
    >
      <img
        src='/images/home/about-phone.png'
        alt='About Section'
        className='z-10 w-74'
      />
      <div
        className='z-20 -mt-24 flex max-w-[840px] flex-col items-center gap-20'
        data-aos='fade-up'
      >
        <div className='flex flex-col items-center gap-6'>
          <p className='text-h3 text-center text-text-primary'>
            Reclaim your online privacy as incognito, making your activity
            invisible and unlinkable to you
          </p>
        </div>
        <div className='flex w-[400px] justify-between'>
          <div className='flex flex-col items-center gap-6'>
            <p className='text-subtitle3 text-text-secondary'>Incognitos</p>
            <AnimatedNumber
              className='text-h4 w-40 text-center text-primary-dark'
              value={incognitosValue}
            />
          </div>
          <div className='flex flex-col items-center gap-6'>
            <p className='text-subtitle3 text-text-secondary'>Identifiers</p>
            <AnimatedNumber
              className='text-h4 w-40 text-center text-primary-dark'
              value={identifiersValue}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
