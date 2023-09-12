import AOS from 'aos';
import { useEffect } from 'react';

import { COMPONENT_NODE_IDS } from '@/const';
import { AppContextProvider, RouteLocationProvider } from '@/context';
import useViewportSizes from '@/hooks/useViewportSizes';
import { AppRoutes } from '@/router';

const App = () => {
  useViewportSizes();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      offset: 0,
      once: true,
      mirror: false,
      anchorPlacement: 'center-bottom',
    });
  }, []);

  return (
    <div id={COMPONENT_NODE_IDS.application} className="application">
      <RouteLocationProvider>
        <AppContextProvider>
          <AppRoutes />
        </AppContextProvider>
      </RouteLocationProvider>
    </div>
  );
};

export default App;
