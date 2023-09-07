import './HomeBanner.scss';

import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';

const HomeBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="home-banner container">
      <div className="home-banner__wrapper">
        <div className="home-banner__icon">
          <Icon
            iconClass="app-footer__button-icon"
            height="40"
            width="40"
            idIcon="icon-shield-check"
          />
        </div>

        <div className="home-banner__text">
          <span className="home-banner__text-1">{t('home-banner.text-1')}</span>
          <span className="home-banner__text-bold">
            {t('home-banner.text-bold')}
          </span>
          <span className="home-banner__text-2">{t('home-banner.text-2')}</span>
        </div>
      </div>
      <div className="home-banner__decor-1 mobile-hidden" />
      <div className="home-banner__decor-2 mobile-hidden" />
      <div className="home-banner__decor-3 mobile-hidden" />
    </div>
  );
};

export default HomeBanner;
