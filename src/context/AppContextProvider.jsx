import useResizeObserver from '@react-hook/resize-observer';
import { createContext, useEffect, useMemo } from 'react';

import useStateRef from '@/hooks/useStateRef';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [isDesktop, setIsDesktop, isDesktopRef] = useStateRef(true);
  const [isMobile, setIsMobile, isMobileRef] = useStateRef(true);
  const [isSafari, setIsSafari, isSafariRef] = useStateRef(false);
  const [needSkipAnimation, setNeedSkipAnimation, needSkipAnimationRef] =
    useStateRef(false);

  useResizeObserver(document.documentElement, ({ contentRect }) => {
    setIsDesktop(contentRect.width >= 1024);
    setIsMobile(contentRect.width <= 425);
  });

  useEffect(() => {
    const isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
      })(
        !window['safari'] ||
          (typeof safari !== 'undefined' && window['safari'].pushNotification),
      );
    setIsSafari(isSafari);
  }, []);

  const memoizedContextValue = useMemo(() => {
    return {
      isDesktop,
      isDesktopRef,
      isMobile,
      isMobileRef,
      needSkipAnimation,
      setNeedSkipAnimation,
      needSkipAnimationRef,
      isSafari,
      isSafariRef,
    };
  }, [isDesktop, needSkipAnimation, isSafari, isMobile]);

  return (
    <AppContext.Provider value={memoizedContextValue}>
      {children}
    </AppContext.Provider>
  );
};
