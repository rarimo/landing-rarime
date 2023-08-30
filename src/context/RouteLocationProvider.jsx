import { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

import { FADE_TRANSITION_STAGE, SHIFT_TRANSITION_DIRECTION } from '@/const';

export const routeLocationContext = createContext({});

export const RouteLocationProvider = ({ children }) => {
  const navigationType = useNavigationType();
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState(
    FADE_TRANSITION_STAGE.fadeIn,
  );
  const [transitionDirection, setTransitionDirection] = useState(
    SHIFT_TRANSITION_DIRECTION.toRight,
  );

  useEffect(() => {
    if (location.state?.isRedirect) {
      setDisplayLocation(location);
      return;
    }

    if (
      transitionStage !== FADE_TRANSITION_STAGE.fadeOut &&
      location.pathname !== displayLocation.pathname
    ) {
      setTransitionDirection(
        navigationType === 'POP'
          ? SHIFT_TRANSITION_DIRECTION.toLeft
          : SHIFT_TRANSITION_DIRECTION.toRight,
      );
      setTransitionStage(FADE_TRANSITION_STAGE.fadeOut);
    }
  }, [location.pathname, displayLocation.pathname]);

  useEffect(() => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }, [displayLocation]);

  const memoizedContextValue = useMemo(
    () => ({
      displayLocation,
      setDisplayLocation,
      transitionDirection,
      transitionStage,
      setTransitionStage,
    }),
    [displayLocation, transitionStage, transitionDirection],
  );

  return (
    <routeLocationContext.Provider value={memoizedContextValue}>
      {children}
    </routeLocationContext.Provider>
  );
};
