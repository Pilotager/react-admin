import './index.less';

import {
  FC,
  Suspense,
  useState,
  createElement,
  useEffect,
  useMemo,
  useRef,
  type ReactElement,
  type JSXElementConstructor,
} from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { observer, useLocalObservable } from 'mobx-react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { IMenuItem } from '@/interfaces';
import store from '@/stores';
import Header from '../Header';
import TagsNav from '../TagsNav';
import Menu from '../Menu';
import KeepAlive from '../KeepAlive';
import Loading from '../Loading';

const { Content, Sider } = Layout;

type IProps = {
  route: any;
};

function makeRouteObject(routes: any) {
  return routes.map((route: any) => {
    return {
      path: route.path,
      name: route.name,
      meta: route.meta,
      element: <route.component />,
      children: !route.children ? undefined : makeRouteObject(route.children),
    };
  }, routes);
}

const TriggerNode: FC<{ collapsed: boolean; onClick: () => void }> = ({ collapsed, onClick }) => {
  return (
    <div className='admin-layout-trigger' onClick={onClick}>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
      })}
    </div>
  );
};

const LayoutWrap: FC<IProps> = ({ route }) => {
  const location = useLocation();
  const { tagList, menuList, menuFlattenList, activeTagCode, getMenuData, addTag, setActiveTag } =
    useLocalObservable(() => store.appStore);
  const { getNoticeData } = useLocalObservable(() => store.userStore);
  const [openKey, setOpenkey] = useState<string>('');
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const [collapsed, setCollapsed] = useState(false);
  const eleRef = useRef<ReactElement<any, string | JSXElementConstructor<any>> | null>();

  useEffect(() => {
    getMenuData();
    getNoticeData();
  }, []);

  const [routeObject] = useMemo(() => {
    if (!route.children) {
      return [[]];
    }
    return [makeRouteObject(route.children)];
  }, [route.children]);

  useEffect(() => {
    const item = menuFlattenList.find((v: IMenuItem) => v.url === location.pathname);
    !!item && setOpenkey(item?.parent || '');
    !!item && setSelectedKey(item?.url || '');
    if (item) {
      addTag({
        path: item.url,
        code: item.code,
        closable: item.code !== 'dashboard',
        label: item.name,
      });
      setActiveTag({
        path: item.url,
        code: item.code,
        closable: item.code !== 'dashboard',
        label: item.name,
      });
    }
  }, [location.pathname, menuFlattenList]);

  const ele = useRoutes(routeObject, location);

  useMemo(() => {
    eleRef.current = ele;
  }, [routeObject, location]);

  return (
    <Layout className='admin-layout'>
      <Header />
      <Layout>
        <Sider
          className='admin-layout-sider'
          collapsible
          collapsed={collapsed}
          width={208}
          theme='light'
          trigger={<TriggerNode collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />}>
          <div className='admin-layout-menu-wrap'>
            <Menu
              data={menuList}
              selectedKey={selectedKey}
              openKeyProp={openKey}
              onSelectedChange={(key) => setSelectedKey(key)}
            />
          </div>
        </Sider>
        <Content>
          <TagsNav data={tagList} activeTagCode={activeTagCode} />
          <Suspense fallback={<Loading />}>
            <KeepAlive name={selectedKey}>{eleRef.current}</KeepAlive>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default observer(LayoutWrap);
