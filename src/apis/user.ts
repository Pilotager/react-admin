import { request, type IResponse } from './libs/Request';
import { IMenuItem } from '@/interfaces';

/**
 * @description 医生个人信息
 */
export const getMenuListApi = (): Promise<IResponse<IMenuItem[]>> => {
  return request<unknown, IMenuItem[]>({
    url: '/api/menu',
    method: 'POST',
  });
};
