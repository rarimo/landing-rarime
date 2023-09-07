import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { AppBar } from '@/components';
import { AppFooter } from '@/components';
import { RouteTransition } from '@/components';

const MainLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <AppBar />

      <RouteTransition>
        <main>
          <h1 className="visually-hidden">{t('app.title')}</h1>
          <Outlet />
        </main>
      </RouteTransition>

      <AppFooter />
    </>
  );
};

export default memo(MainLayout);
