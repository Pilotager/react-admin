import '@/styles/index.less';

import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';

import store from '@/stores';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider {...store}>
    <App />
  </Provider>,
);
