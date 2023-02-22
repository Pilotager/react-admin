import './index.less';

import { FC, Suspense, useState, createElement, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout, type MenuProps } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { observer, useLocalObservable } from 'mobx-react';
import store from '@/stores';
import Header from '../Header';
import TagsNav from '../TagsNav';
import Menu from '../Menu';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: string,
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

const menuList: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '/'),
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

const TriggerNode: FC<{ collapsed: boolean; onClick: () => void }> = ({ collapsed, onClick }) => {
  return (
    <div className='admin-layout-trigger' onClick={onClick}>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
      })}
    </div>
  );
};

const LayoutWrap: FC = () => {
  const location = useLocation();
  const { tagList, addTag } = useLocalObservable(() => store.tagStore);
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const tag: MenuItem | undefined = menuList.find((v: MenuItem) => v?.key === location.pathname);
    if (tag) {
      addTag({
        path: tag.key as string,
        code: tag.key as string,
        closable: true,
        label: tag.label,
      });
    }
  }, [location.pathname, menuList]);

  console.log(tagList);

  return (
    <Layout className='admin-layout'>
      <Header />
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={<TriggerNode collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />}
          theme='light'
          width={208}
          className='admin-layout-sider'>
          <div className='admin-layout-menu-wrap'>
            <Menu
              data={menuList}
              selectedKey={selectedKey}
              onSelectedChange={(key) => setSelectedKey(key)}
            />
          </div>
        </Sider>
        <Content>
          <TagsNav tags={tagList} />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default observer(LayoutWrap);
