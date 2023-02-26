import * as React from 'react';
import { Route } from 'react-router-dom';
import { ErrorBoundary } from '@/layout';

const Home = React.lazy(() => import('@/pages/Home/Home'));
const Account = React.lazy(() => import('@/pages/Account/Account'));

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
            <Home />
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
            <Account />
          </ErrorBoundary>
        }
      />
    ),
  },
];
