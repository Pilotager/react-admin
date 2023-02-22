import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '@/layout';

import { RouteObjects } from './RouterConfig';

const RouterWrapper = () => {
  const getFilteredRoutes = () => {
    let filteredRouteObjects = [];
    filteredRouteObjects = RouteObjects.filter((routeObject) => !!routeObject.roles);
    return filteredRouteObjects.map((routeObject) => {
      return routeObject.route;
    });
  };

  const filteredRoutes = getFilteredRoutes();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        {filteredRoutes}
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default RouterWrapper;
