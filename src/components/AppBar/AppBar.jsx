import './AppBar.scss';
import { Link } from 'react-router-dom';
import { ROUTES_PATHS } from "@/const/index.js";
import { useTranslation } from "react-i18next";

const AppBar = () => {
  const { t } = useTranslation();
  return (
    <header className='app-bar'>
      <div className="app-bar__container">
        <div className="app-bar__content container">
          <Link className="app-bar__logo" to={ROUTES_PATHS.home}>
            <svg className="app-bar__logo-img" height="47" width="47">
              <use href="/icons/sprite.svg#icon-app-logo"></use>
            </svg>
            <span className="app-bar__logo-title">{t('app.title')}</span>
          </Link>
          <button className="app-bar__button">
            <svg className="app-bar__button-icon" height="24" width="24">
              <use href="/icons/sprite.svg#icon-header-button"></use>
            </svg>
            <span className="app-bar__button-text">{t('header.button')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
