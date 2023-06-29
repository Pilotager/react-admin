import { makeAutoObservable, computed, runInAction, action } from 'mobx';
import { message } from 'antd';
import { getNoticeListApi } from '@/apis';
import { INoticeItem } from '@/interfaces';

const { error } = message;

// 用户信息
class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  private noticeData: INoticeItem[] = []; // 导航数据

  // 获取消息列表
  public getNoticeData = async () => {
    const res = await getNoticeListApi();
    if (res.errorCode !== 'SUCCESS') {
      error(res.errorMsg);
      return;
    }
    runInAction(() => {
      this.noticeData = res.data || [];
    });
  };

  @action('点击消息')
  public onNoticeClick = (item: INoticeItem) => {
    console.log(item.id);
  };

  @computed
  public get noticeList() {
    return this.noticeData.slice();
  }
}

export { UserStore };
