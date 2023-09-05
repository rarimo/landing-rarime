import './AppFooter.scss';

import { useTranslation } from 'react-i18next';

const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="app-footer container">
      <div className="app-footer__date">
        <span>{t('footer.date')}</span>
      </div>
      <button className="app-footer__button">
        <svg className="app-footer__button-icon" height="24" width="24">
          <use href="/icons/sprite.svg#icon-header-button"></use>
        </svg>
        <span className="app-footer__button-text">{t('footer.button')}</span>
      </button>
    </footer>
  );
};

export default AppFooter;
