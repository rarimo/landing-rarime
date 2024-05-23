'use client'
import '@splidejs/splide/css'

import { Splide } from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { useEffect } from 'react'

import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg'
import { Sections } from '@/constants/sections'
import { Button, Container } from '@/ui'

export default function IntegrationsSection() {
  const integrations = [
    {
      title: 'Metamask',
      img: '/images/integrations/metamask-logo.svg',
    },
    {
      title: 'Civic',
      img: '/images/integrations/civic-logo.svg',
    },
    {
      title: 'Worldcoin',
      img: '/images/integrations/worldcoin-logo.svg',
    },
    {
      title: 'Gitcoin Passport',
      img: '/images/integrations/gp-logo.svg',
    },
    {
      title: 'Kleros',
      img: '/images/integrations/kleros-logo.svg',
    },
    {
      title: 'Colab',
      img: '/images/integrations/colab-logo.svg',
    },
    {
      title: 'QuestN',
      img: '/images/integrations/questn-logo.svg',
    },
    {
      title: 'Unstoppable Domains',
      img: '/images/integrations/ud-logo.svg',
    },
    {
      title: 'Galxe',
      img: '/images/integrations/galxe-logo.svg',
    },
    {
      title: 'Zealy',
      img: '/images/integrations/zealy-logo.svg',
    },
    {
      title: 'Integral',
      img: '/images/integrations/integral-logo.svg',
    },
  ]

  useEffect(() => {
    new Splide('.splide', {
      gap: '24px',
      arrows: false,
      pagination: false,
      autoWidth: true,
      type: 'loop',
      drag: 'free',
      focus: 'center',
      autoScroll: {
        speed: 0.5,
        pauseOnHover: false,
      },
    }).mount({ AutoScroll })
  }, [])

  return (
    <div
      id={Sections.Integrations}
      className='flex flex-col gap-14 lg:gap-20'
      data-aos='fade-up'
    >
      <Container className='flex flex-col justify-between gap-6 lg:flex-row lg:items-end'>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <h2 className='text-subtitle1 text-text-secondary'>Integrations</h2>
          <p className='text-h4 text-text-primary lg:text-h3'>
            Supported solutions
          </p>
        </div>
        <Button
          as='a'
          href='https://forms.gle/4owu3c9XfhK9KrL29'
          target='_blank'
          rel='noreferrer'
          className='w-max'
          size='large'
        >
          <span>Add your service</span>
          <ArrowRightIcon className='h-5 w-5' />
        </Button>
      </Container>

      <div className='splide'>
        <div className='splide__track'>
          <div className='splide__list'>
            {integrations.map(({ title, img }, index) => (
              <div
                className='splide__slide flex h-30 min-w-42 flex-1 flex-col items-center justify-between rounded-sm bg-background-component px-8 py-4'
                key={index}
              >
                <img className='h-8 w-8' src={img} alt={title} />
                <p className='text-center text-caption1 text-text-secondary'>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
