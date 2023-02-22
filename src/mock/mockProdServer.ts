//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import { menu } from './user';

const mockModules = [...menu];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
