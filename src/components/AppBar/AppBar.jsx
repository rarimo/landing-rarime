import './AppBar.scss';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Icon } from '@/components';
import { CONFIG } from '@/config';
import { ROUTES_PATHS } from '@/const';

const AppBar = () => {
  const { t } = useTranslation();
  return (
    <header className="app-bar">
      <div className="app-bar__container">
        <div className="app-bar__content container">
          <Link className="app-bar__logo" to={ROUTES_PATHS.home}>
            <Icon
              iconClass="app-bar__logo-img"
              height="47"
              width="47"
              idIcon="icon-app-logo"
            />
            <span className="app-bar__logo-title">{t('app.title')}</span>
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
    </header>
  );
};

export default AppBar;
