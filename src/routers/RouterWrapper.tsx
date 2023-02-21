import { useEffect } from 'react';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '@/layout';
import store from '@/store';

import { RouteObjects } from './RouterConfig';

const RouterWrapper = () => {
  // useEffect(() => {
  //   store.common.getUserInfo();
  // }, []);

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
