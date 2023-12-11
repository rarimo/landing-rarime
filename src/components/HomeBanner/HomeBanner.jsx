import './HomeBanner.scss'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Icon } from '@/components'

import { CONFIG } from '../../config'

const HomeBanner = () => {
  const { t } = useTranslation()

  return (
    <div className='home-banner container' data-aos='fade-up'>
      <div className='home-banner__wrapper'>
        <div className='home-banner__icon'>
          <Icon
            iconClass='app-footer__button-icon'
            height='40'
            width='40'
            idIcon='icon-shield-check'
          />
        </div>

        <div className='home-banner__text'>
          <span className='home-banner__text-1'>{t('home-banner.text-1')}</span>
          <span className='home-banner__text-bold'>{t('home-banner.text-bold')}</span>
          <span className='home-banner__text-2'>{t('home-banner.text-2')}</span>
        </div>
      </div>
      {[...Array(3).keys()].map(decor => (
        <div key={decor} className={cn([`home-banner__decor-${decor + 1} mobile-hidden`])} />
      ))}
    </div>
  )
}

export default HomeBanner
