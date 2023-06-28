import { request, type IResponse } from './libs/Request';
import { IMenuItem, INoticeItem } from '@/interfaces';

/**
 * @description 医生个人信息
 */
export const getMenuListApi = (): Promise<IResponse<IMenuItem[]>> => {
  return request<unknown, IMenuItem[]>({
    url: '/api/menu',
    method: 'POST',
  });
};

/**
 * @description 消息通知
 */
export const getNoticeListApi = (): Promise<IResponse<INoticeItem[]>> => {
  return request<unknown, INoticeItem[]>({
    url: '/api/notice',
    method: 'POST',
  });
};
