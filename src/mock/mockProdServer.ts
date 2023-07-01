//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import { menu, notice, info } from './user';

const mockModules = [...menu, ...notice, ...info];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
