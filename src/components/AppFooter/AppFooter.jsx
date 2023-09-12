import './AppFooter.scss';

import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';
import { CONFIG } from '@/config';

const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="app-footer container">
      <div className="app-footer__date">
        <span>{t('footer.date')}</span>
      </div>
      <a className="app-footer__button" href={CONFIG.linkToInstallSnap}>
        <Icon
          iconClass="app-footer__button-icon"
          height="24"
          width="24"
          idIcon="icon-header-button"
        />
        <span className="app-footer__button-text">{t('footer.button')}</span>
      </a>
    </footer>
  );
};

export default AppFooter;
