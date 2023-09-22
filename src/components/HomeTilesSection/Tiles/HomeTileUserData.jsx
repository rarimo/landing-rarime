import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';

const HomeTileUserData = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default HomeTileUserData;
