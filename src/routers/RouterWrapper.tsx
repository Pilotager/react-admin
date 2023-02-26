// import {
//   RouterProvider,
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from 'react-router-dom';
// import { Layout } from '@/layout';

// import { RouteObjects } from './RouterConfig';

// const RouterWrapper = () => {
//   const getFilteredRoutes = () => {
//     let filteredRouteObjects = [];
//     filteredRouteObjects = RouteObjects.filter((routeObject) => !!routeObject.roles);
//     return filteredRouteObjects.map((routeObject) => {
//       return routeObject.route;
//     });
//   };

//   const filteredRoutes = getFilteredRoutes();
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Layout />}>
//         {filteredRoutes}
//       </Route>,
//     ),
//   );

//   return <RouterProvider router={router} />;
// };

import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loading } from '@/layout';
import { routes } from './RouterConfig';

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} key={route.name} element={<route.component route={route} />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterWrapper;
