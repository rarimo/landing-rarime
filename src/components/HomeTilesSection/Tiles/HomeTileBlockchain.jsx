import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';

const HomeTileBlockchain = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default HomeTileBlockchain;
