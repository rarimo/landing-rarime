import './HomeIdentityIssuersSection.scss';

import { useTranslation } from 'react-i18next';

const HomeIdentityIssuersSection = () => {
  const { t } = useTranslation();
  return (
    <div className="home-identity-issuers container">
      <div className="home-identity-issuers__wrapper">
        <h2 className="home-identity-issuers__title">
          <span className="home-identity-issuers__title-1">
            {t('home-identity-issuers.title-1')}
          </span>
          <span className="home-identity-issuers__title-2">
            {t('home-identity-issuers.title-2')}
          </span>
        </h2>
        <div className="home-identity-issuers__list">
          <div className="home-identity-issuers__list-item">
            <div className="home-identity-issuers__list-item-img-wrapper home-identity-issuers__civic-icon">
              <img
                src="/static/img/civic.png"
                alt="icon civic"
                className="home-identity-issuers__list-item-img"
              />
            </div>
            <p className="home-identity-issuers__list-item-text">
              {t('home-identity-issuers.civic')}
            </p>
          </div>
          <div className="home-identity-issuers__list-item">
            <div className="home-identity-issuers__list-item-img-wrapper">
              <img
                src="/static/img/world-coin.png"
                alt="Worldcoin icon"
                className="home-identity-issuers__list-item-img"
              />
            </div>
            <p className="home-identity-issuers__list-item-text">
              {t('home-identity-issuers.worldcoin')}
            </p>
          </div>
          <div className="home-identity-issuers__list-item">
            <div className="home-identity-issuers__list-item-img-wrapper home-identity-issuers__unstoppable-domains-icon">
              <img
                src="/static/img/unstoppable-domains.png"
                alt="Unstoppable domains icon"
                className="home-identity-issuers__list-item-img"
              />
            </div>
            <p className="home-identity-issuers__list-item-text">
              {t('home-identity-issuers.unstoppable-domains')}
            </p>
          </div>
          <div className="home-identity-issuers__list-item">
            <div className="home-identity-issuers__list-item-img-wrapper home-identity-issuers__gitcoin-icon">
              <img
                src="/static/img/gitcoin.png"
                alt="Gitcoin icon"
                className="home-identity-issuers__list-item-img"
              />
            </div>
            <p className="home-identity-issuers__list-item-text">
              {t('home-identity-issuers.gitcoin')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIdentityIssuersSection;
