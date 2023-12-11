import { useTranslation } from 'react-i18next'

import { Icon } from '@/components'

import { CONFIG } from '../../../config'

const HomeTileDashboard = () => {
  const { t } = useTranslation()

  const redirectToDashboard = () => {
    window.open(CONFIG.dashboardLink)
  }

  return (
    <div className='home-tiles-section__tile' data-aos='fade-up' onClick={redirectToDashboard}>
      <h6 className='home-tiles-section__tile-title'>{t('home-tiles-section.title-4-part-1')}</h6>
      <strong className='home-tiles-section__tile-title'>
        {t('home-tiles-section.title-4-part-2')}
      </strong>
      <p className='home-tiles-section__tile-description'>
        {t('home-tiles-section.tile-4-description')}
      </p>
      <div className='home-tiles-section__tile-content'>
        <div className='home-tiles-section__tile-dashboard'>
          <div className='home-tiles-section__tile-dashboard-toolbar'>
            <div className='home-tiles-section__tile-dashboard-toolbar-dot'></div>
            <div className='home-tiles-section__tile-dashboard-toolbar-dot'></div>
            <div className='home-tiles-section__tile-dashboard-toolbar-dot'></div>
            <Icon
              iconClass='home-tiles-section__tile-toolbar-icon'
              idIcon='icon-toolbar'
              height='14'
              width='14'
            />
            <Icon
              iconClass='home-tiles-section__tile-arrow-left-icon'
              idIcon='icon-arrow'
              height='14'
              width='14'
              color='rgba(45, 48, 57, 0.6)'
            />
            <Icon
              iconClass='home-tiles-section__tile-arrow-right-icon'
              idIcon='icon-arrow'
              height='14'
              width='14'
              color='rgba(45, 48, 57, 0.2)'
            />
            <Icon
              iconClass='home-tiles-section__tile-reload-icon'
              idIcon='icon-reload'
              height='14'
              width='14'
            />
            <div className='home-tiles-section__tile-dashboard-field'>
              <Icon
                iconClass='home-tiles-section__tile-lock-icon'
                idIcon='icon-lock'
                height='10'
                width='10'
              />
            </div>
          </div>
          <div className='home-tiles-section__tile-dashboard-background' />
        </div>
      </div>
    </div>
  )
}

export default HomeTileDashboard
