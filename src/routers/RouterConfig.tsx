import { lazy } from 'react';

export const routeList = [
  {
    path: '/',
    component: lazy(() => import('@/pages/Home/Home')),
    name: 'home',
  },
];

export const routes = [
  {
    path: '/*',
    component: lazy(() => import('@/layout/Layout')),
    name: 'erp',
    children: routeList,
  },
];
