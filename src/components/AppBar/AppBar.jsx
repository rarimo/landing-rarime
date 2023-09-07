import './AppBar.scss';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Icon } from '@/components';
import { ROUTES_PATHS } from '@/const';

const AppBar = () => {
  const { t } = useTranslation();

  const connectToSnap = async () =>{
    try {
      const result = await window.ethereum.request({
        method: 'wallet_requestSnaps',
        params: {
          'npm:@metamask/example-snap': {},
          'npm:fooSnap': {
            // The optional version argument allows requesting a SemVer version
            // range, with the same semantics as npm package.json ranges.
            version: '^1.0.2',
          },
        },
      });

      console.log(result);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <header className="app-bar">
      <div className="app-bar__container">
        <div className="app-bar__content container">
          <Link className="app-bar__logo" to={ROUTES_PATHS.home}>
            <Icon
              iconClass="app-bar__logo-img"
              height="47"
              width="47"
              idIcon="icon-app-logo"
            />
            <span className="app-bar__logo-title">{t('app.title')}</span>
          </Link>
          <button className="app-bar__button" onClick={connectToSnap}>
            <Icon
              iconClass="app-bar__button-icon"
              height="24"
              width="24"
              idIcon="icon-header-button"
            />
            <span className="app-bar__button-text">{t('header.button')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
