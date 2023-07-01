import { request, type IResponse } from './libs/Request';
import { IMenuItem, INoticeItem, ILoginReq } from '@/interfaces';

/**
 * @description 菜单信息
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

/**
 * @description 登录
 */
export const loginApi = (data: ILoginReq): Promise<IResponse<null>> => {
  return request<ILoginReq, null>({
    url: '/api/login',
    method: 'POST',
    data,
  });
};
