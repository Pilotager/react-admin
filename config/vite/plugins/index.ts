import react from '@vitejs/plugin-react';
import type { PluginOption, ConfigEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';
import removeConsole from 'vite-plugin-remove-console';
import {
  VITE_APP_ANALYZE,
  VITE_APP_COMPRESS_GZIP,
  VITE_APP_COMPRESS_GZIP_DELETE_FILE,
} from '../../constant';
import configVisualizerPlugin from './visualizer';
import VitePluginImp from './vitePluginImp';
import viteMock from './viteMock';

export function createVitePlugins(viteEnv: string, command: ConfigEnv['command']) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    react(),
    viteMock(command),
    removeConsole(),
  ];

  // rollup-plugin-visualizer
  VITE_APP_ANALYZE && vitePlugins.push(configVisualizerPlugin());
  vitePlugins.push(VitePluginImp());

  // The following plugins only work in the production environment
  if (command === 'build') {
    // rollup-plugin-gzip
    VITE_APP_COMPRESS_GZIP &&
      vitePlugins.push(viteCompression({ deleteOriginFile: VITE_APP_COMPRESS_GZIP_DELETE_FILE }));
  }

  return vitePlugins;
}
