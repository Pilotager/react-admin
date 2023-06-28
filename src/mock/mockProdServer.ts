//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import { menu, notice } from './user';

const mockModules = [...menu, ...notice];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
