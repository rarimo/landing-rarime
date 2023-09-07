import './HomeHeroInstallSection.scss';

import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';

const HomeHeroInstallSection = () => {
  const { t } = useTranslation();
  return (
    <>
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
                  <Icon
                    iconClass="home-hero-install-section__button-svg"
                    idIcon="icon-hero-install-section"
                  />
                </div>
                <div className="home-hero-install-section__button-icon-metamask">
                  <Icon
                    iconClass="home-hero-install-section__button-svg-metamask"
                    idIcon="icon-logo-metamask"
                  />
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
              <img
                src="static/img/removeRedEye.png"
                width="24"
                height="23"
                alt="icon eye"
                className="home-hero-install-section__content-card-img"
              />
              <span className="home-hero-install-section__content-card-text">
                {t('home-hero-section.card-text-1')}
              </span>
            </div>
            <div className="home-hero-install-section__content-card">
              <img
                src="static/img/bolt.png"
                width="24"
                height="23"
                alt="icon bolt"
                className="home-hero-install-section__content-card-img"
              />
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
        <div className="home-hero-install-section__modal-one">
          <div className="home-hero-install-section__modal-one-icon-wrapper">
            <div className="home-hero-install-section__modal-one-icon">
              <Icon
                iconClass="home-hero-install-section__modal-one-svg"
                idIcon="icon-polygon"
              />
            </div>
            <div className="home-hero-install-section__modal-one-icon-halborn-wrapper">
              <Icon
                iconClass="home-hero-install-section__modal-one-icon-halborn"
                idIcon="icon-halborn"
              />
            </div>
          </div>
          <span className="home-hero-install-section__modal-one-text">
            {t('home-hero-section.modal-one-text')}
          </span>
        </div>
        <div className="home-hero-install-section__modal-two">
          <div className="home-hero-install-section__modal-two-header">
            <Icon
              iconClass="home-hero-install-section__modal-two-header-icon"
              idIcon="icon-polygon-badge"
            />
          </div>
          <div className="home-hero-install-section__modal-two-footer">
            <p className="home-hero-install-section__modal-two-footer-title">
              {t('home-hero-section.modal-two-footer-title')}
            </p>
            <div>
              <span className="home-hero-install-section__modal-two-footer-text">
                {t('home-hero-section.modal-two-footer-text')}
              </span>
              <span className="home-hero-install-section__modal-two-footer-tag">
                {t('home-hero-section.modal-two-footer-tag')}
              </span>
            </div>
          </div>
        </div>
        <div className="home-hero-install-section__decor" />
      </div>
      <div className="home-hero-install-section__deco-mobile" />
    </>
  );
};

export default HomeHeroInstallSection;
