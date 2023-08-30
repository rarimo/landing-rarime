import './HomeHeroInstallSection.scss';

import { useTranslation } from 'react-i18next';

const HomeHeroInstallSection = () => {
  const { t } = useTranslation();
  return (
    <div className="home-hero-install-section">
      <div className="home-hero-install-section__wrapper">
        <div className="home-hero-install-section__header">
          <div className="home-hero-install-section__header-navigation">
            <div className="home-hero-install-section__header-navigation-back">
              <span>{t('home-hero-section.back')}</span>
            </div>
            <div className="home-hero-install-section__header-navigation-step">
              <span>{t('home-hero-section.step')}</span>
            </div>
          </div>
          <div className="home-hero-install-section__header-icon">
            <div className="home-hero-install-section__icon-wrapper">
              <div className="home-hero-install-section__button-icon">
                <svg height="57" width="57">
                  <use href="/icons/sprite.svg#icon-hero-install-section-icon"></use>
                </svg>
              </div>
              <div className="home-hero-install-section__button-icon-metamask">
                <svg height="16" width="14">
                  <use href="/icons/sprite.svg#icon-logo-metamask"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero-install-section__text">
          <h3 className="home-hero-install-section__text-title">
            {t('home-hero-section.install-content-title')}
          </h3>
          <p className="home-hero-install-section__text-description">
            {t('home-hero-section.install-content-description')}
          </p>
        </div>
        <div className="home-hero-install-section__content">
          <div className="home-hero-install-section__content-card">
            <svg height="24" width="23">
              <use href="/icons/sprite.svg#icon-eye"></use>
            </svg>
            <span className="home-hero-install-section__content-card-text">
              {t('home-hero-section.card-text-1')}
            </span>
          </div>
          <div className="home-hero-install-section__content-card">
            <svg height="23" width="23">
              <use href="/icons/sprite.svg#icon-bold"></use>
            </svg>
            <span className="home-hero-install-section__content-card-text">
              {t('home-hero-section.card-text-2')}
            </span>
          </div>
        </div>
      </div>
      <div className="home-hero-install-section__footer">
        <button className="home-hero-install-section__footer-btn-cancel">
          {t('home-hero-section.btn-cancel')}
        </button>
        <button className="home-hero-install-section__footer-btn-install">
          {t('home-hero-section.btn-install')}
        </button>
      </div>
    </div>
  );
};

export default HomeHeroInstallSection;
