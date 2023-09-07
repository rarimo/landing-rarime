import { COMPONENT_NODE_IDS } from '@/const';
import { AppContextProvider, RouteLocationProvider } from '@/context';
import useViewportSizes from '@/hooks/useViewportSizes';
import { AppRoutes } from '@/router';

const App = () => {
  useViewportSizes();

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
