import { NoticeType, NoticeStatus } from '@/interfaces/types';

/** *********** 菜单列表 *************/
export interface IMenuItem {
  code: string;
  icon: string;
  url: string;
  name: string;
  parent?: string;
  children: IMenuItem[];
}

/** *********** 消息列表 *************/
export interface INoticeItem {
  id: string;
  title: string;
  type: NoticeType;
  avatar?: string;
  datetime?: string;
  extra?: string;
  read?: boolean;
  description?: string;
  clickClose?: boolean;
  status?: NoticeStatus;
}

/** *********** 登录 *************/
export interface ILoginReq {
  username: string;
  password: string;
}
