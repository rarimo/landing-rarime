import './AppBar.scss'

import cn from 'classnames'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Icon } from '@/components'
import { CONFIG } from '@/config'
import { ROUTES_PATHS } from '@/const'
import { useAppContext } from '@/hooks'

const HEIGHT_APP_BAR = 150
const HEIGHT_HERO_SECTION = 800

const AppBar = () => {
  const { t } = useTranslation()
  const { isDesktop } = useAppContext()

  const [isShown, setIsShown] = useState(true)
  const [isDark, setIsDark] = useState(true)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious()
    setIsShown(latest < previous || latest < HEIGHT_APP_BAR)
    setIsDark(scrollY.current < HEIGHT_HERO_SECTION)
  })

  const logo = useMemo(() => {
    return isDesktop
      ? isDark
        ? 'icon-app-logo-dark'
        : 'icon-app-logo-light'
      : isDark
      ? 'icon-logo-mobile-light'
      : 'icon-logo-mobile-dark'
  }, [isDark, isDesktop])

  return (
    <motion.header
      className={cn(['app-bar', isDark ? 'app-bar__dark' : 'app-bar__light'])}
      variants={{
        visible: { y: 0, display: 'block' },
        hidden: { y: '-100%', transitionEnd: { display: 'none' } },
      }}
      animate={isShown ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className='app-bar__container'>
        <div className='app-bar__content container'>
          <Link className='app-bar__logo' to={ROUTES_PATHS.home}>
            <Icon iconClass='app-bar__logo-img' idIcon={logo} />
          </Link>
          <div className='app-bar__button-wrapper'>
            <a
              className='app-bar__button-dashboard app-bar__button'
              href={CONFIG.dashboardLink}
              target='_blank'
              rel='noreferrer'
            >
              <span className='app-bar__button-text'>{t('header.button-app')}</span>
            </a>
            <a
              className='app-bar__button-install'
              href={CONFIG.linkToInstallSnap}
              target='_blank'
              rel='noreferrer'
            >
              <Icon
                iconClass='app-bar__button-icon'
                height='24'
                width='24'
                idIcon='icon-hero-section-button'
              />
              <span className='app-bar__button-text'>
                {isDesktop ? t('header.button-install') : t('header.button-install-mobile')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default AppBar
