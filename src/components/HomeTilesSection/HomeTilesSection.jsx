import './HomeTilesSection.scss';

import { useTranslation } from 'react-i18next';

const HomeTilesSection = () => {
  const { t } = useTranslation();
  return (
    <div className="home-tiles-section">
      <div className="home-tiles-section__wrapper container">
        <div className="home-tiles-section__header">
          <div className="home-tiles-section__tile">
            <h6 className="home-tiles-section__tile-title">
              {t('home-tiles-section.title-1-part-1')}
            </h6>
            <strong className="home-tiles-section__tile-title">
              {t('home-tiles-section.title-1-part-2')}
            </strong>
            <p className="home-tiles-section__tile-description">
              {t('home-tiles-section.tile-1-description')}
            </p>
            <div className="home-tiles-section__tile-content">
              <div className="home-tiles-section__tile-protect">
                <div className="home-tiles-section__tile-protect-header">
                  <div className="home-tiles-section__proof-of-age">
                    <div className="home-tiles-section__proof-of-age-header">
                      <div className="home-tiles-section__proof-of-age-header-text">
                        <h6 className="home-tiles-section__proof-of-age-title">
                          {t('home-tiles-section.proof-of-age-title')}
                        </h6>
                        <span className="home-tiles-section__proof-of-age-subtitle">
                          {t('home-tiles-section.proof-of-age-subtitle')}
                        </span>
                      </div>
                      <svg
                        className="home-tiles-section__proof-of-age-icon"
                        height="24"
                        width="24"
                      >
                        <use href="/icons/sprite.svg#icon-check-box"></use>
                      </svg>
                    </div>
                    <div className="home-tiles-section__proof-of-age-text-wrapper">
                      <p className="home-tiles-section__proof-of-age-text">
                        {t('home-tiles-section.proof-of-age-text')}
                      </p>
                    </div>
                    <div className="home-tiles-section__proof-of-age-footer">
                      <div className="home-tiles-section__proof-of-age-footer-wrapper">
                        <p className="home-tiles-section__proof-of-age-footer-text">
                          {t('home-tiles-section.proof-of-age-footer-text')}
                        </p>
                        <div className="home-tiles-section__proof-of-age-footer-content">
                          <span className="home-tiles-section__proof-of-age-footer-date">
                            {t('home-tiles-section.proof-of-age-footer-date')}
                          </span>
                          <span className="home-tiles-section__proof-of-age-footer-description">
                            {t(
                              'home-tiles-section.proof-of-age-footer-description',
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-tiles-section__tile-lock-card">
                    <img src="/static/img/lock-img.png" alt="Lock img" />
                  </div>
                </div>
                <div className="home-tiles-section__tile-protect-footer">
                  <div className="home-tiles-section__tile-protect-dapp">
                    <svg
                      className="home-tiles-section__dapp-icon"
                      height="27"
                      width="27"
                    >
                      <use href="/icons/sprite.svg#icon-language"></use>
                    </svg>
                    <span className="home-tiles-section__dapp-text">
                      {t('home-tiles-section.dapp-text')}
                    </span>
                  </div>
                  <div className="home-tiles-section__tile-protect-lines">
                    <div className="home-tiles-section__tile-protect-line-top">
                      {t('home-tiles-section.dapp-arrow-text-1')}
                      <img
                        className="home-tiles-section__tile-protect-vector"
                        src="/static/img/vector-dapp-1.png"
                        alt="vector"
                      />
                    </div>
                    <div className="home-tiles-section__tile-protect-line-bottom">
                      {t('home-tiles-section.dapp-arrow-text-2')}
                      <img
                        className="home-tiles-section__tile-protect-vector-2"
                        src="/static/img/vector-dapp-2.png"
                        alt="vector"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-tiles-section__tile">
            <h6 className="home-tiles-section__tile-title">
              {t('home-tiles-section.title-2-part-1')}
            </h6>
            <strong className="home-tiles-section__tile-title">
              {t('home-tiles-section.title-2-part-2')}
            </strong>
            <p className="home-tiles-section__tile-description">
              {t('home-tiles-section.tile-2-description')}
            </p>
            <div className="home-tiles-section__tile-content home-tiles-section__tile-decor__wrapper">
              <div className="home-tiles-section__tile-decor-1">
                <div className="home-tiles-section__tile-avalanche-icon-wrapper">
                  <img
                    src="/static/img/avalanche-icon.png"
                    alt="avalanche icon"
                  />
                </div>
                <div className="home-tiles-section__tile-ether-icon-wrapper">
                  <svg height="44" width="68">
                    <use href="/icons/sprite.svg#icon-ether"></use>
                  </svg>
                </div>
              </div>
              <div className="home-tiles-section__tile-decor-2">
                <div className="home-tiles-section__tile-zkevm-icon-wrapper">
                  zkEVM
                </div>
              </div>
              <div className="home-tiles-section__tile-decor-3">
                <div className="home-tiles-section__tile-binance-icon-wrapper">
                  <img src="/static/img/binance-icon.png" alt="binance icon" />
                </div>
                <div className="home-tiles-section__tile-polygon-icon-wrapper">
                  <svg height="37" width="37">
                    <use href="/icons/sprite.svg#icon-polygon-small"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-tiles-section__footer">
          <div className="home-tiles-section__tile">
            <h6 className="home-tiles-section__tile-title">
              {t('home-tiles-section.title-3-part-1')}
            </h6>
            <strong className="home-tiles-section__tile-title">
              {t('home-tiles-section.title-3-part-2')}
            </strong>
            <p className="home-tiles-section__tile-description">
              {t('home-tiles-section.tile-3-description')}
            </p>
            <div className="home-tiles-section__tile-content">
              <div className="home-tiles-section__tile-card">
                <div className="home-tiles-section__tile-user-img-wrapper">
                  <img src="/static/img/user-img.png" alt="User Icon" />
                </div>
                <p className="home-tiles-section__tile-card-name">
                  {t('home-tiles-section.tile-card-name')}
                </p>
                <p className="home-tiles-section__tile-card-followers">
                  {t('home-tiles-section.tile-card-followers')}
                </p>
                <div className="home-tiles-section__tile-card-img-key-wrapper">
                  <img
                    className="home-tiles-section__tile-card-img-key"
                    src="/static/img/key.png"
                    alt="key"
                  />
                </div>
              </div>
              <div className="home-tiles-section__tile-card-skeleton">
                <div className="home-tiles-section__tile-card-info">
                  <div className="home-tiles-section__tile-img-skeleton" />
                  <div className="home-tiles-section__tile-text">
                    <div className="home-tiles-section__tile-title-skeleton"></div>
                    <div className="home-tiles-section__tile-subtitle-skeleton"></div>
                  </div>
                </div>
                <svg
                  className="home-tiles-section__tile-button-icon"
                  height="24"
                  width="25"
                >
                  <use href="/icons/sprite.svg#icon-more-light"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="home-tiles-section__tile">
            <h6 className="home-tiles-section__tile-title">
              {t('home-tiles-section.title-4-part-1')}
            </h6>
            <strong className="home-tiles-section__tile-title">
              {t('home-tiles-section.title-4-part-2')}
            </strong>
            <p className="home-tiles-section__tile-description">
              {t('home-tiles-section.tile-4-description')}
            </p>
            <div className="home-tiles-section__tile-content">
              <div className="home-tiles-section__tile-dashboard">
                <div className="home-tiles-section__tile-dashboard-toolbar">
                  <div className="home-tiles-section__tile-dashboard-toolbar-dot"></div>
                  <div className="home-tiles-section__tile-dashboard-toolbar-dot"></div>
                  <div className="home-tiles-section__tile-dashboard-toolbar-dot"></div>
                  <svg
                    className="home-tiles-section__tile-toolbar-icon"
                    height="14"
                    width="14"
                  >
                    <use href="/icons/sprite.svg#icon-toolbar"></use>
                  </svg>
                  <svg
                    className="home-tiles-section__tile-arrow-left-icon"
                    height="14"
                    width="14"
                    color="rgba(45, 48, 57, 0.6)"
                  >
                    <use href="/icons/sprite.svg#icon-arrow"></use>
                  </svg>
                  <svg
                    className="home-tiles-section__tile-arrow-right-icon"
                    height="14"
                    width="14"
                    color="rgba(45, 48, 57, 0.2)"
                  >
                    <use href="/icons/sprite.svg#icon-arrow"></use>
                  </svg>
                  <svg
                    className="home-tiles-section__tile-reload-icon"
                    height="14"
                    width="14"
                  >
                    <use href="/icons/sprite.svg#icon-reload"></use>
                  </svg>
                  <div className="home-tiles-section__tile-dashboard-field">
                    <svg
                      className="home-tiles-section__tile-lock-icon"
                      height="10"
                      width="10"
                    >
                      <use href="/icons/sprite.svg#icon-lock"></use>
                    </svg>
                  </div>
                </div>
                <div className="home-tiles-section__tile-dashboard-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTilesSection;
