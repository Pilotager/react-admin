import './index.less';

import { FC, Suspense, useState, createElement, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { observer, useLocalObservable } from 'mobx-react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { IMenuItem } from '@/interfaces';
import store from '@/stores';
import Header from '../Header';
import TagsNav from '../TagsNav';
import Menu from '../Menu';

const { Content, Sider } = Layout;

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
  const { tagList, menuList, menuFlattenList, activeTagCode, getMenuData, addTag, setActiveTag } =
    useLocalObservable(() => store.appStore);
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    const item = menuFlattenList.find((v: IMenuItem) => v.url === location.pathname);
    if (item) {
      addTag({
        path: item.url,
        code: item.url,
        closable: item.code !== 'dashboard',
        label: item.name,
      });
      setActiveTag({
        path: item.url,
        code: item.url,
        closable: item.code !== 'dashboard',
        label: item.name,
      });
    }
  }, [location.pathname, menuFlattenList]);

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
          <TagsNav data={tagList} activeTagCode={activeTagCode} />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default observer(LayoutWrap);
