import { useContext } from 'react';

import { routeLocationContext } from '@/context';

const useRouteLocation = () => useContext(routeLocationContext);

export default useRouteLocation;
