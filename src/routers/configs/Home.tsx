import * as React from 'react';
import { Route } from 'react-router-dom';
import { ErrorBoundary } from '@/layout';

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
            <Home />
          </ErrorBoundary>
        }
      />
    ),
  },
];
