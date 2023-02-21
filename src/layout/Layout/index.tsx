import './index.less';

import { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout, type MenuProps } from 'antd';
import { AppstoreOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons';
import Menu from '../Menu';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

const LayoutWrap: FC = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  return (
    <Layout className='admin-layout'>
      <Sider trigger={null} collapsible theme='light'>
        <Menu
          data={items}
          selectedKey={selectedKey}
          onSelectedChange={(key) => setSelectedKey(key)}
        />
      </Sider>
      <Layout>
        <Header className='admin-layout-header'></Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWrap;
