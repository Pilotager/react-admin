import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';
import {
  VITE_APP_ANALYZE,
  VITE_APP_COMPRESS_GZIP,
  VITE_APP_COMPRESS_GZIP_DELETE_FILE,
} from '../../constant';
import configVisualizerPlugin from './visualizer';
import VitePluginImp from './vitePluginImp';

export function createVitePlugins(viteEnv: string, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    react(),
  ];

  // rollup-plugin-visualizer
  VITE_APP_ANALYZE && vitePlugins.push(configVisualizerPlugin());
  vitePlugins.push(VitePluginImp());

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    VITE_APP_COMPRESS_GZIP &&
      vitePlugins.push(viteCompression({ deleteOriginFile: VITE_APP_COMPRESS_GZIP_DELETE_FILE }));
  }

  return vitePlugins;
}
