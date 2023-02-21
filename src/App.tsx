import { FC, Suspense } from 'react';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';

import RouterWrapper from './routers/RouterWrapper';

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Suspense fallback={null}>
        <RouterWrapper />
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
