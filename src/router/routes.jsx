import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES_PATHS } from '@/const';
import useRouteLocation from '@/hooks/useRouteLocation';
import MainLayout from '@/layouts/MainLayout';

const HomePage = lazy(() => import('@/pages/HomePage'));

export const AppRoutes = () => {
  const { displayLocation } = useRouteLocation();

  const routes = [
    {
      element: <MainLayout />,
      path: ROUTES_PATHS.home,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
      ],
    },
    {
      path: '*',
      element: (
        <Navigate replace to={ROUTES_PATHS.home} state={{ isRedirect: true }} />
      ),
    },
  ];

  const renderRoutes = useRoutes(routes, displayLocation);

  return <Suspense fallback={<></>}>{renderRoutes}</Suspense>;
};
