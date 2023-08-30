import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { FADE_TRANSITION_STAGE } from '@/const';
import useRouteLocation from '@/hooks/useRouteLocation';

const RouteTransition = ({ children }) => {
  const location = useLocation();
  const {
    transitionStage,
    transitionDirection,
    setTransitionStage,
    setDisplayLocation,
  } = useRouteLocation();

  return (
    <div
      className={cn([
        'fade-shift-transition',
        `fade-shift-transition--${transitionStage}`,
        `fade-shift-transition--${transitionDirection}`,
      ])}
      onAnimationEnd={() => {
        if (transitionStage === FADE_TRANSITION_STAGE.fadeOut) {
          setTransitionStage(FADE_TRANSITION_STAGE.fadeIn);
          setDisplayLocation(location);
        }
      }}
    >
      {children}
    </div>
  );
};

export default RouteTransition;
