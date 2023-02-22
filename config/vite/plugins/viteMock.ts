import { viteMockServe } from 'vite-plugin-mock';
import type { ConfigEnv } from 'vite';

export default function viteMockServeFun(command: ConfigEnv['command']) {
  const prodMock = false;

  return viteMockServe({
    supportTs: true,
    logger: false,
    mockPath: './src/mock',
    localEnabled: command === 'serve',
    prodEnabled: command !== 'serve' && prodMock,
    // injectCode: `
    //   import { setupProdMockServer } from './src/mock/mockProdServer';
    //   setupProdMockServer();
    // `,
  });
}
