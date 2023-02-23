import type { MockMethod } from 'vite-plugin-mock';

const menuData = [
  {
    code: 'dashboard',
    icon: 'DashboardOutlined',
    url: '/',
    name: '工作台',
  },
  {
    code: 'patient',
    icon: 'UserOutlined',
    url: '/patient',
    name: '患者管理',
    children: [
      {
        parent: '/patient',
        code: 'patient-list',
        icon: 'UserOutlined',
        url: '/patient/patient-list',
        name: '患者列表',
      },
    ],
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
