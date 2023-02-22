import '@/styles/index.less';

import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';

if (import.meta.env.VITE_ENV === 'development') {
  const module = await import('./mock/mockProdServer');
  module.setupProdMockServer();
}

import store from '@/stores';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider {...store}>
    <App />
  </Provider>,
);
