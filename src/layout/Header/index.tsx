import './index.less';

import { FC } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const HeaderWrap: FC = () => {
  return (
    <Header className='admin-layout-header'>
      <div className='admin-layout-header_logo'>
        <a href=''>
          <h1>React Admin</h1>
        </a>
      </div>
    </Header>
  );
};

export default HeaderWrap;
