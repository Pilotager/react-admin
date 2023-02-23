import path from 'path';
import { defineConfig } from 'vite';
import dayjs from 'dayjs';
import { createVitePlugins } from './config/vite/plugins';
import pkg from './package.json';

const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: createVitePlugins(mode, command),
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '[ext]/[name].[hash].[ext]',
          chunkFileNames: 'js/[name].[hash].js',
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    define: {
      // 设置应用信息
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
