import { useContext } from 'react';

import { AppContext } from '@/context';

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (Object.values(context || {}).length === 0) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
