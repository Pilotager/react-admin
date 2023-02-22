import type { AxiosRequestConfig } from 'axios';
import type { IBaseResponse } from '@/interfaces';
import { HttpRequest } from './HttpRequest';

export interface IResponse<T = null> extends IBaseResponse {
  data: T;
}

// 重写返回类型
interface RequestConfig<T> extends AxiosRequestConfig {
  data?: T;
  prefix?: string;
}

const axios = new HttpRequest('');

const request = <D, T>(config: RequestConfig<D>) => {
  return axios.request<IResponse<T>>(config);
};

export { request };
