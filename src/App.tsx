import { FC } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { ConfigProvider, theme as ATheme } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import store from '@/stores';

import RouterWrapper from './routers/RouterWrapper';

const App: FC = () => {
  const { theme } = useLocalObservable(() => store.appStore);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: { colorPrimary: '#00bf8a' },
        algorithm: theme === 'dark' ? ATheme.darkAlgorithm : ATheme.defaultAlgorithm,
      }}>
      <RouterWrapper />
    </ConfigProvider>
  );
};

export default observer(App);
