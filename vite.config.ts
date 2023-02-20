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
  const isBuild = command === 'build';

  return {
    plugins: createVitePlugins(mode, isBuild),
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
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: true,
          drop_debugger: true,
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
