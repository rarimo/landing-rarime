import './HomeHeroSection.scss'

import { stagger, timeline } from 'motion'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { HomeHeroInstallSection, Icon } from '@/components'
import { COMPONENT_NODE_IDS } from '@/const'

const HomeHeroSection = () => {
  const { t } = useTranslation()

  const wordsToShow = useMemo(() => ['One', 'Same'], [])

  useEffect(() => {
    timeline(
      [
        [
          '.home-hero-section__title-part-2-word-first',
          {
            display: 'inline',
          },
        ],
        [
          '.home-hero-section__title-part-2-word-first .home-hero-section__title-part-2',
          {
            opacity: [0, 1],
            display: ['none', 'inline'],
          },
          {
            delay: stagger(0.1, { start: 0.75 }),
            duration: 0.1,
            easing: 'linear',
          },
        ],
        [
          '.home-hero-section__title-part-2-container-cursor',
          {
            opacity: [1, 0, 1, 0, 1, 0, 1],
          },
          {
            duration: 3,
            delay: 0.25,
            easing: 'linear',
            maskRepeat: Infinity,
          },
        ],
        [
          '.home-hero-section__title-part-2-word-first .home-hero-section__title-part-2',
          {
            opacity: [1, 0],
            display: ['inline', 'none'],
          },
          {
            delay: stagger(0.1, { from: 'last', start: 0.35 }),
            duration: 0.1,
            easing: 'linear',
          },
        ],

        [
          '.home-hero-section__title-part-2-word-second',
          {
            display: 'inline',
          },
        ],
        [
          '.home-hero-section__title-part-2-word-second .home-hero-section__title-part-2',
          {
            opacity: [0, 1],
            display: ['none', 'inline'],
          },
          {
            delay: stagger(0.1, { start: 0.75 }),
            duration: 0.1,
            easing: 'linear',
          },
        ],
        [
          '.home-hero-section__title-part-2-container-cursor',
          {
            opacity: [1, 0, 1, 0, 1, 0, 1],
          },
          {
            duration: 3,
            delay: 0.25,
            easing: 'linear',
            maskRepeat: Infinity,
          },
        ],
        [
          '.home-hero-section__title-part-2-word-second .home-hero-section__title-part-2',
          {
            opacity: [1, 0],
            display: ['inline', 'none'],
          },
          {
            delay: stagger(0.1, { from: 'last', start: 0.35 }),
            duration: 0.1,
            easing: 'linear',
          },
        ],
      ],
      {
        repeat: Infinity,
        defaultOptions: {
          delay: 0.5,
        },
        /* eslint-disable-next-line */
        },
    )
  }, [])

  return (
    <section id={COMPONENT_NODE_IDS.heroSection} className='home-hero-section'>
      <div className='home-hero-section__content container'>
        <div className='home-hero-section__hero-wrapper'>
          <div className='home-hero-section__text-wrapper'>
            <h2 className='home-hero-section__title'>
              <div className='home-hero-section__title-part'>
                <span>{t('home-hero-section.title-part-1')}</span>

                <div className='home-hero-section__title-part-2-wrapper'>
                  <div className='home-hero-section__title-part-2-container'>
                    <div className='home-hero-section__title-part-2-word home-hero-section__title-part-2-word-first'>
                      {wordsToShow[0].split('').map((letter, idx) => (
                        <span className='home-hero-section__title-part-2' key={idx}>
                          {letter}
                        </span>
                      ))}
                    </div>
                    <div className='home-hero-section__title-part-2-word home-hero-section__title-part-2-word-second'>
                      {wordsToShow[1].split('').map((letter, idx) => (
                        <span className='home-hero-section__title-part-2' key={idx}>
                          {letter}
                        </span>
                      ))}
                    </div>

                    <div className='home-hero-section__title-part-2-container-cursor' />
                  </div>
                </div>

                <span>{t('home-hero-section.title-part-3')}</span>
              </div>
              <div className='home-hero-section__title-part'>
                <span>{t('home-hero-section.title-part-4')}</span>
              </div>
            </h2>

            <h5 className='home-hero-section__subtitle' data-aos='fade-up'>
              {t('home-hero-section.subtitle')}
            </h5>

            <button className='home-hero-section__install-button'>
              <Icon
                iconClass='home-hero-section__install-button-icon'
                height='24'
                width='24'
                idIcon='icon-hero-section-button'
              />
              <span className='home-hero-section__install-button-text'>{t('header.button')}</span>
            </button>
            <p className='home-hero-section__description' data-aos='fade-up'>
              {t('home-hero-section.description')}
            </p>
          </div>
          <HomeHeroInstallSection />
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
