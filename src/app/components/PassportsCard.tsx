'use client'

import { useState } from 'react'

import ChipIcon from '@/assets/icons/chip-icon.svg'
import PlayIcon from '@/assets/icons/play-icon.svg'
import { Button, Modal } from '@/ui'

import PassportDemo from './PassportDemo'

export default function PassportsCard() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <div className='relative flex h-[484px] flex-col justify-between overflow-hidden rounded-xl bg-secondary-base px-6 py-8 text-base-white lg:h-[582px] lg:rounded-3xl lg:px-16 lg:py-16'>
      <img
        className='absolute -right-8 top-12 z-0 w-[440px] max-w-max lg:right-4 lg:top-16 lg:w-[720px]'
        src='/images/home/passport-bg.png'
        alt='Passports Section'
      />
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-5 lg:h-18 lg:w-18'>
        <ChipIcon className='h-6 w-6 text-white' />
      </div>
      <div className='z-10 flex max-w-[820px] flex-col gap-6 lg:gap-10'>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <p className='text-subtitle3 opacity-50 lg:text-subtitle1'>
            ZK Passport
          </p>
          <p className='text-h6 lg:text-h4'>
            Convert your passport into an incognito profile and generate
            zero-knowledge proofs that verify your age, citizenship, or humanity
          </p>
        </div>
        <Button
          className='w-max !border-base-white'
          size='large'
          intent='outlined'
          onClick={() => setIsDemoModalOpen(true)}
        >
          <span>Play Demo</span>
          <PlayIcon className='h-5 w-5' />
        </Button>
        <Modal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        >
          <PassportDemo isOpen={isDemoModalOpen} />
        </Modal>
      </div>
    </div>
  )
}
