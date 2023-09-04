import './HomeBanner.scss';

import { useTranslation } from 'react-i18next';

const HomeBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="home-banner container">
      <div className="home-banner__wrraper">
        <div className="home-banner__icon">
          <svg height="40" width="40">
            <use href="/icons/sprite.svg#icon-shield-check"></use>
          </svg>
        </div>

        <div className="home-banner__text">
          <span className="home-banner__text-1">{t('home-banner.text-1')}</span>
          <span className="home-banner__text-bold">
            {t('home-banner.text-bold')}
          </span>
          <span className="home-banner__text-2">{t('home-banner.text-2')}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
