import vitePluginImp from 'vite-plugin-imp';

export default function vitePluginImpFun() {
  return vitePluginImp({
    libList: [
      {
        libName: 'lodash',
        libDirectory: '',
        camel2DashComponentName: false,
        style: () => {
          return false;
        },
      },
      {
        libName: 'antd',
        style(name) {
          // use less
          return false;
        },
      },
    ],
  });
}
