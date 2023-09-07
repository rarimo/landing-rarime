import { debounce } from 'lodash-es';
import { useEffect } from 'react';

let assignVhCssVariableDebounced;

const useViewportSizes = () => {
  const assignVhCssVariable = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    assignVhCssVariableDebounced = debounce(assignVhCssVariable, 300);
    assignVhCssVariable();
    window.addEventListener('resize', assignVhCssVariableDebounced);

    return () =>
      window.removeEventListener('resize', assignVhCssVariableDebounced);
  }, []);
};

export default useViewportSizes;
