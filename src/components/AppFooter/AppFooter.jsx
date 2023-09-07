import './AppFooter.scss';

import { useTranslation } from 'react-i18next';

import { SvgWrapper } from '@/components';

const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="app-footer container">
      <div className="app-footer__date">
        <span>{t('footer.date')}</span>
      </div>
      <button className="app-footer__button">
        <SvgWrapper
          iconClass="app-footer__button-icon"
          height="24"
          width="24"
          idIcon="icon-header-button"
        />
        <span className="app-footer__button-text">{t('footer.button')}</span>
      </button>
    </footer>
  );
};

export default AppFooter;
