import './index.less';

import { FC, createElement } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { Layout, Avatar, Dropdown, Space, type MenuProps } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { ReactComponent as MoonSvg } from '@/assets/svg/layout/moon.svg';
import { ReactComponent as SunSvg } from '@/assets/svg/layout/sun.svg';
import store from '@/stores';
import Notice from '../Notice';

const { Header } = Layout;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '个人中心',
  },
  {
    key: '2',
    label: '退出登录',
  },
];

const HeaderWrap: FC = () => {
  const { theme, setTheme } = useLocalObservable(() => store.appStore);
  return (
    <Header className='admin-layout-header'>
      <div className='admin-layout-header_logo'>
        <h1>React Admin</h1>
      </div>
      <div className='admin-layout-header_empty' />
      <Space>
        <div
          className='admin-layout-header_switch'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {createElement(theme === 'light' ? SunSvg : MoonSvg, {
            className: 'icon',
          })}
        </div>
        <div className='admin-layout-header_switch'>
          <Notice />
        </div>
        <Dropdown menu={{ items }} className='admin-layout-header_drop'>
          <div>
            <Avatar size={30} icon={<UserOutlined />} />
            <span className='admin-layout-header_name'>React</span>
          </div>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default observer(HeaderWrap);
