import type { MockMethod, Recordable } from 'vite-plugin-mock';

export const info: MockMethod[] = [
  {
    url: '/api/login',
    method: 'post',
    response: ({ body }: { body: Recordable }) => {
      const { username, password } = body;
      if (username === 'admin' && password === 'admin') {
        return {
          errorCode: 'SUCCESS',
          errorMsg: '成功',
          success: true,
          data: null,
        };
      }
    },
  },
];
