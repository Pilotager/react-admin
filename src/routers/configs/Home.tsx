import * as React from 'react';
import { Route } from 'react-router-dom';
import { ErrorBoundary, Loading } from '@/layout';

const Home = React.lazy(() => import('@/pages/Home/Home'));

export const home = [
  {
    roles: [],
    route: (
      <Route
        index
        key='/'
        path='/'
        element={
          <ErrorBoundary>
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          </ErrorBoundary>
        }
      />
    ),
  },
  {
    roles: [],
    route: (
      <Route
        index
        key='/patient/patient-list'
        path='/patient/patient-list'
        element={
          <ErrorBoundary>
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          </ErrorBoundary>
        }
      />
    ),
  },
];
