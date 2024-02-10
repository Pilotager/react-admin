import type { MockMethod } from 'vite-plugin-mock';

const menuData = [
  {
    code: 'dashboard',
    icon: 'DashboardOutlined',
    url: '/',
    name: '工作台',
  },
];

export const menu: MockMethod[] = [
  {
    url: '/api/menu',
    method: 'post',
    response: () => {
      return {
        errorCode: 'SUCCESS',
        errorMsg: '成功',
        success: true,
        data: menuData,
      };
    },
  },
];
