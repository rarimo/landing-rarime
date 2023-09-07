import './AppBar.scss';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { SvgWrapper } from '@/components';
import { ROUTES_PATHS } from '@/const';

const AppBar = () => {
  const { t } = useTranslation();
  return (
    <header className="app-bar">
      <div className="app-bar__container">
        <div className="app-bar__content container">
          <Link className="app-bar__logo" to={ROUTES_PATHS.home}>
            <SvgWrapper
              iconClass="app-bar__logo-img"
              height="47"
              width="47"
              idIcon="icon-app-logo"
            />
            <span className="app-bar__logo-title">{t('app.title')}</span>
          </Link>
          <button className="app-bar__button">
            <SvgWrapper
              iconClass="app-bar__button-icon"
              height="24"
              width="24"
              idIcon="icon-header-button"
            />
            <span className="app-bar__button-text">{t('header.button')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
