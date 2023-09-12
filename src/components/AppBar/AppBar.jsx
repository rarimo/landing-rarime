import './AppBar.scss';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Icon } from '@/components';
import { CONFIG } from '@/config';
import { ROUTES_PATHS } from '@/const';

const AppBar = () => {
  const { t } = useTranslation();

  const [ isShown, setIsShown ] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious()
    setIsShown(latest < previous || latest < 150)
  })

  return (
    <motion.header
      className="app-bar"
      variants={{
        visible: { y: 0, display: 'block' },
        hidden: { y: '-100%', transitionEnd: { display: 'none' } },
      }}
      animate={isShown ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="app-bar__container">
        <div className="app-bar__content container">
          <Link className="app-bar__logo" to={ROUTES_PATHS.home}>
            <Icon
              iconClass="app-bar__logo-img"
              idIcon="icon-app-logo"
            />
          </Link>
          <a
            className="app-bar__button"
            href={CONFIG.linkToInstallSnap}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              iconClass="app-bar__button-icon"
              height="24"
              width="24"
              idIcon="icon-header-button"
            />
            <span className="app-bar__button-text">{t('header.button')}</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default AppBar;
