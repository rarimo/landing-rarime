import './AppAccordion.scss';

import { useMemo, useState } from 'react';

import Icon from '@/components/Icon';

const AppAccordion = ({ headerText, contentText, link, linkText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const accordionClasses = useMemo(
    () =>
      [
        'app-accordion',
        ...(isExpanded ? ['app-accordion--expanded'] : []),
      ].join(' '),
    [isExpanded],
  );

  const toogleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={accordionClasses}>
      <div className="app-accordion__wrp">
        <h2 className="app-accordion__header">
          <button
            className="app-accordion__header-btn"
            onClick={toogleIsExpanded}
          >
            {headerText}
            <Icon idIcon="icon-arrow-down" iconClass="app-accordion__icon" />
          </button>
        </h2>
        {isExpanded && (
          <p className="app-accordion__body">
            {contentText}
            <a
              className="app-accordion__body-link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              {linkText}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AppAccordion;
