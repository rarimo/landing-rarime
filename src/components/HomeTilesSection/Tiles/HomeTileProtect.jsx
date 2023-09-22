import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';

const HomeTileProtect = () => {
  const { t } = useTranslation();
  return (
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
                      {t('home-tiles-section.proof-of-age-footer-description')}
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
  );
};

export default HomeTileProtect;
