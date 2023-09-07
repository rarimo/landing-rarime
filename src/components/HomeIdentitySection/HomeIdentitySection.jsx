import './HomeIdentitySection.scss';

import { resources } from '@static/template-data/resources';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { SvgWrapper } from '@/components';

const HomeIdentitySection = () => {
  const { t } = useTranslation();
  return (
    <div className="home-identity-section">
      <div className="home-identity-section__wrapper container">
        <p className="home-identity-section__title-1">
          {t('home-identity-section.title-1')}
        </p>
        <p className="home-identity-section__title-2">
          {t('home-identity-section.title-2')}
        </p>
        <div className="home-identity-section__content-wrapper">
          <div className="home-identity-section__providers">
            <span className="home-identity-section__providers-title">
              {t('home-identity-section.title-content-section')}
            </span>
            <div className="home-identity-section__container-grid">
              <div className="home-identity-section__row">
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle green">
                  <div className="home-identity-section__line-mobile" />
                </div>
                <div className="home-identity-section__circle">
                  <div className="home-identity-section__line" />
                </div>
                <div className="home-identity-section__circle"></div>
              </div>
              <div className="home-identity-section__row mobile-hidden">
                <div className="home-identity-section__circle green">
                  <div className="home-identity-section__line" />
                </div>
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle"></div>
              </div>
              <div className="home-identity-section__row mobile-hidden">
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle green"></div>
                <div className="home-identity-section__circle">
                  <div className="home-identity-section__line" />
                </div>
              </div>
              <div className="home-identity-section__row mobile-hidden">
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle green">
                  <div className="home-identity-section__line" />
                </div>
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle"></div>
                <div className="home-identity-section__circle"></div>
              </div>
            </div>
          </div>
          <div className="home-identity-section__dev-resources">
            {resources.map((resource, idx) => (
              <div key={idx} className="home-identity-section__resource">
                <div className="home-identity-section__resource-info">
                  <div
                    className="home-identity-section__resource-img-wrapper"
                    style={{ background: resource.imgBg }}
                  >
                    <img
                      src={resource.img}
                      alt="icon"
                      className="home-identity-section__resource-img"
                    />
                  </div>
                  <div className="home-identity-section__resource-text">
                    <p className="home-identity-section__resource-title">
                      {t(resource.titleKey)}
                    </p>
                    <span className="home-identity-section__resource-subtitle">
                      {t(resource.subtitleKey)}
                    </span>
                    <span
                      className={cn([
                        'home-identity-section__resource-tag',
                        `tag-${resource.tagColor}`,
                      ])}
                    >
                      {t(resource.tag)}
                    </span>
                  </div>
                </div>
                <div className="home-identity-section__resource-button">
                  <SvgWrapper
                    iconClass="home-identity-section__resource-button-icon"
                    height="24"
                    width="25"
                    idIcon="icon-more"
                  />
                </div>
              </div>
            ))}
            <div className="home-identity-section__resource">
              <div className="home-identity-section__resource-info">
                <div className="home-identity-section__resource-img home-identity-section__resource-img-skeleton" />
                <div className="home-identity-section__resource-text">
                  <div className="home-identity-section__resource-title home-identity-section__resource-title-skeleton"></div>
                  <div className="home-identity-section__resource-subtitle home-identity-section__resource-subtitle-skeleton"></div>
                </div>
              </div>
              <div className="home-identity-section__resource-button">
                <SvgWrapper
                  iconClass="home-identity-section__resource-button-icon"
                  height="24"
                  width="25"
                  idIcon="icon-more-light"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIdentitySection;
