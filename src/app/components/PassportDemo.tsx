'use client'
import { Splide } from '@splidejs/splide'
import { useEffect, useRef, useState } from 'react'

import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg'
import { cn } from '@/theme/utils'

const steps = [
  {
    title:
      'To create an incognito profile, users should scan their biometric passport',
    image: '/images/home/demo-mockup-1.png',
  },
  {
    title:
      'The application will initially support a set of countries and, over time, will include other passports on the waitlist',
    image: '/images/home/demo-mockup-2.png',
  },
  {
    title:
      'The biggest innovation is that users self-issue digital passports, ensuring personal data never leaves their device',
    image: '/images/home/demo-mockup-3.png',
  },
  {
    title:
      'The incognito profile enables users to prove their eligibility and belonging and use country-specific mini-apps',
    image: '/images/home/demo-mockup-4.png',
  },
]

export default function PassportDemo({ isOpen }: { isOpen: boolean }) {
  const [step, setStep] = useState(0)
  const splide = useRef<Splide | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      setStep(0)
      splide.current = new Splide(sliderRef.current as HTMLElement, {
        gap: '24px',
        arrows: false,
        perPage: 1,
        pagination: false,
        snap: true,
      }).mount()

      splide.current.on('move', () => {
        setStep(splide.current?.index || 0)
      })
    }
  }, [isOpen])

  return (
    <div className='px-4 py-8 sm:px-8 sm:py-12 lg:px-20 lg:py-20 xl:px-50 xl:py-60'>
      <div className='container flex max-w-[320px] flex-col gap-6 lg:max-w-[420px] lg:gap-10'>
        <div ref={sliderRef} className='splide'>
          <div className='splide__track'>
            <div className='splide__list'>
              {steps.map(({ title }, index) => (
                <div key={index} className='splide__slide flex flex-col gap-4'>
                  <p className='text-subtitle4 text-text-secondary lg:text-subtitle3'>
                    Step {index + 1}/{steps.length}
                  </p>
                  <p className='text-subtitle3 text-text-primary lg:text-subtitle2'>
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <button
            disabled={step === 0}
            onClick={() => splide.current?.go('-1')}
            className='text-text-primary disabled:text-text-secondary'
          >
            <ArrowRightIcon className='h-5 rotate-180' />
          </button>
          <div className='flex gap-2'>
            {steps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'h-2 w-2 rounded-full',
                  index === step
                    ? 'bg-primary-base'
                    : 'bg-background-component',
                )}
                onClick={() => splide.current?.go(index)}
              />
            ))}
          </div>
          <button
            disabled={step === steps.length - 1}
            className='text-text-primary disabled:text-text-secondary'
            onClick={() => splide.current?.go('+1')}
          >
            <ArrowRightIcon className='h-5' />
          </button>
        </div>
      </div>

      <div className='h-sm:w-[480px] h-sm:h-[384px] h-sm:right-20 h-sm:-bottom-10 absolute right-0 top-[220px] h-[640px] w-[800px] sm:bottom-0 sm:right-1/4 sm:top-auto xl:bottom-0 xl:right-[20%]'>
        <img
          className='absolute bottom-0 right-0 h-full'
          src='/images/home/demo-hand.png'
          alt='Demo hand'
        />

        <div className='h-sm:top-[5px] h-sm:right-[61px] h-sm:w-[128px] h-sm:rounded-[12px] absolute right-[101px] top-[8px] flex w-[215px] overflow-hidden rounded-[20px]'>
          <div
            className='flex gap-[20px] transition-transform duration-300 ease-in-out'
            style={{
              transform: `translateX(calc(-${100 * step}% - ${20 * step}px)`,
            }}
          >
            {steps.map(({ image }, index) => (
              <img
                key={index}
                src={image}
                className='cursor-pointer'
                alt='Demo mockup'
                role='presentation'
                onClick={() => splide.current?.go('+1')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
