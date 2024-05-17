'use client'

import AnimatedNumber from '@/common/AnimatedNumber'
import { Sections } from '@/constants/sections'
import { Container } from '@/ui'
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
    <Container
      id={Sections.Identity}
      className='flex flex-col items-center lg:mt-60 3xl:mt-0'
    >
      <img
        src='/images/home/about-phone.png'
        alt='About Section'
        className='z-10 w-74'
      />
      <div
        className='z-20 -mt-42 flex w-full max-w-[840px] flex-col items-center gap-20 lg:-mt-24'
        data-aos='fade-up'
      >
        <div className='flex flex-col items-center gap-6'>
          <p className='text-center text-h4 text-text-primary lg:text-h3'>
            Reclaim your online privacy as incognito, making your activity
            invisible and unlinkable to you
          </p>
        </div>
        <div className='flex w-full max-w-[400px] justify-between'>
          <div className='flex flex-col items-center gap-6'>
            <p className='text-subtitle3 text-text-secondary'>Incognitos</p>
            <AnimatedNumber
              className='w-40 text-center text-h4 text-primary-dark'
              value={incognitosValue}
            />
          </div>
          <div className='flex flex-col items-center gap-6'>
            <p className='text-subtitle3 text-text-secondary'>Identifiers</p>
            <AnimatedNumber
              className='w-40 text-center text-h4 text-primary-dark'
              value={identifiersValue}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
