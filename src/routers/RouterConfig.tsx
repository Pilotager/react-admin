import { home } from './configs';
import { lazy } from 'react';

export const RouteObjects = [...home];

export const routeList = [
  {
    path: '/',
    component: lazy(() => import('@/pages/Home/Home')),
    name: 'home',
  },
  {
    path: '/patient/patient-list',
    component: lazy(() => import('@/pages/Account/Account')),
    name: 'patient-list',
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
