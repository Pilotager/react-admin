import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

interface IOptions extends AxiosRequestConfig {
  noEmpty?: boolean; // 是否要过滤空值
  prefix?: string; // 前缀
}

export class HttpRequest {
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }

  private readonly baseUrl;

  private queue: {
    [key: string]: boolean;
  };

  getInsideConfig = () => {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'User-Token': '',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };
    return config;
  };

  destroy(url: string) {
    delete this.queue[url];
  }

  interceptors(instance: AxiosInstance, url?: string) {
    instance.interceptors.request.use(
      (config) => {
        this.queue[url || ''] = true;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        const { data } = res;
        if (data && (data.errorCode === 'SYS2007' || data.errorCode === 'SYS2001')) {
          // 全局错误登出
          // 跳转到登录页
        }
        return data;
      },
      (error) => {
        let errorInfo = error.response ? error.response.data : null;
        if (errorInfo) {
          const {
            request: { statusText, status },
            config,
          } = JSON.parse(JSON.stringify(error));
          errorInfo = {
            statusText,
            status,
            request: { responseURL: config.url },
          };
        }
        return Promise.reject(error.response ? error.response.data.message : 'error');
      },
    );
  }

  request<R>(options: IOptions): Promise<R> {
    return new Promise((resolve, reject) => {
      const instance = axios.create();
      instance.defaults.withCredentials = true;
      // 过滤空值
      // if (!(options.data instanceof FormData) && !options.noEmpty) {
      //   options.data = clean(options.data);
      // }
      // 获取配置
      const config = this.getInsideConfig();
      options = Object.assign(config, options, {
        data: options.data,
      });
      this.interceptors(instance, `${options.url}`);
      instance
        .request<unknown, R>(options)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
