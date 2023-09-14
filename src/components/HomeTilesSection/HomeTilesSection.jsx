import './HomeTilesSection.scss';

import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';

const HomeTilesSection = () => {
  const { t } = useTranslation();
  return (
    <div className="home-tiles-section">
      <div className="home-tiles-section__wrapper container">
        <div className="home-tiles-section__header">
          <div className="home-tiles-section__tile" data-aos="fade-up">
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
                          {t('home-tiles-section.proof-of-age-subtitle-1')}
                          <span className="home-tiles-section__proof-of-age-subtitle-white">
                            {t('home-tiles-section.proof-of-age-subtitle-2')}
                          </span>
                        </span>
                      </div>
                      <Icon
                        iconClass="home-tiles-section__proof-of-age-icon"
                        height="24"
                        width="24"
                        idIcon="icon-check-box"
                      />
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
                    <img
                      src="/img/lock-img.png"
                      alt="Lock img"
                      className="home-tiles-section__tile-lock-card-img"
                    />
                  </div>
                </div>
                <div className="home-tiles-section__tile-protect-footer">
                  <div className="home-tiles-section__tile-protect-dapp">
                    <Icon
                      iconClass="home-tiles-section__dapp-icon"
                      height="27"
                      width="27"
                      idIcon="icon-language"
                    />
                    <span className="home-tiles-section__dapp-text">
                      {t('home-tiles-section.dapp-text')}
                    </span>
                  </div>
                  <div className="home-tiles-section__tile-protect-lines">
                    <div className="home-tiles-section__tile-protect-line-top">
                      {t('home-tiles-section.dapp-arrow-text-1')}
                      <img
                        className="home-tiles-section__tile-protect-vector"
                        src="/img/vector-dapp-1.webp"
                        alt="vector"
                      />
                    </div>
                    <div className="home-tiles-section__tile-protect-line-bottom">
                      {t('home-tiles-section.dapp-arrow-text-2')}
                      <img
                        className="home-tiles-section__tile-protect-vector-2"
                        src="/img/vector-dapp-2.webp"
                        alt="vector"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-tiles-section__tile" data-aos="fade-up">
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
                  <Icon
                    iconClass="home-tiles-section__tile-avalanche-icon"
                    idIcon="icon-avalanche"
                  />
                </div>
                <div className="home-tiles-section__tile-ether-icon-wrapper">
                  <Icon
                    iconClass="home-tiles-section__tile-ether-icon"
                    idIcon="icon-ether"
                  />
                </div>
              </div>
              <div className="home-tiles-section__tile-decor-2">
                <div className="home-tiles-section__tile-zkevm-icon-wrapper">
                  {t('home-tiles-section.icon-zkevm')}
                </div>
              </div>
              <div className="home-tiles-section__tile-decor-3">
                <div className="home-tiles-section__tile-binance-icon-wrapper">
                  <Icon
                    iconClass="home-tiles-section__tile-binance-icon"
                    idIcon="icon-binance"
                  />
                </div>
                <div className="home-tiles-section__tile-polygon-icon-wrapper">
                  <Icon
                    iconClass="home-tiles-section__tile-polygon-icon"
                    idIcon="icon-polygon-small"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-tiles-section__footer">
          <div className="home-tiles-section__tile" data-aos="fade-up">
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
                  <img src="/img/user-img.png" alt="User Icon" />
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
                    src="/img/key.png"
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
                <Icon
                  iconClass="home-tiles-section__tile-button-icon"
                  idIcon="icon-more-light"
                  height="24"
                  width="25"
                />
              </div>
            </div>
          </div>
          <div className="home-tiles-section__tile" data-aos="fade-up">
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
                  <Icon
                    iconClass="home-tiles-section__tile-toolbar-icon"
                    idIcon="icon-toolbar"
                    height="14"
                    width="14"
                  />
                  <Icon
                    iconClass="home-tiles-section__tile-arrow-left-icon"
                    idIcon="icon-arrow"
                    height="14"
                    width="14"
                    color="rgba(45, 48, 57, 0.6)"
                  />
                  <Icon
                    iconClass="home-tiles-section__tile-arrow-right-icon"
                    idIcon="icon-arrow"
                    height="14"
                    width="14"
                    color="rgba(45, 48, 57, 0.2)"
                  />
                  <Icon
                    iconClass="home-tiles-section__tile-reload-icon"
                    idIcon="icon-reload"
                    height="14"
                    width="14"
                  />
                  <div className="home-tiles-section__tile-dashboard-field">
                    <Icon
                      iconClass="home-tiles-section__tile-lock-icon"
                      idIcon="icon-lock"
                      height="10"
                      width="10"
                    />
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
