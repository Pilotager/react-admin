import { makeAutoObservable, action, computed, runInAction } from 'mobx';
import { message } from 'antd';
import { getMenuListApi } from '@/apis';
import type { ITagItem, IMenuItem } from '@/interfaces';
import { setTagNavListInStorage, flattenMenu } from '@/utils';

const { error } = message;

export type ThemeType = 'dark' | 'light';

const userSystemTheme: ThemeType = window.matchMedia('(prefers-color-scheme: light)').matches
  ? 'light'
  : 'dark';
const userLocalTheme: ThemeType = (localStorage.getItem('user-theme') as ThemeType) || 'light';

// 系统状态全局Store
class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  public activeTagCode = ''; // 当前高亮tag
  private tags: ITagItem[] = []; // 页签数据
  private menuData: IMenuItem[] = []; // 导航数据
  private menuFlattenData: IMenuItem[] = []; // 导航数据
  public theme: ThemeType = userLocalTheme || userSystemTheme; // 主题颜色

  // 获取菜单列表
  public getMenuData = async () => {
    const res = await getMenuListApi();
    if (res.errorCode !== 'SUCCESS') {
      error(res.errorMsg);
      return;
    }
    runInAction(() => {
      this.menuData = res.data || [];
      this.menuFlattenData = flattenMenu(res.data || []);
    });
  };

  @action('添加tag')
  public addTag = (tag: ITagItem) => {
    if (!this.tagList[0] || this.tagList[0].code !== 'dashboard') {
      const item = this.menuFlattenData.find((v) => v.code === 'dashboard');
      !!item &&
        this.tags.unshift({
          path: item.url,
          code: item.code,
          closable: false,
          label: item.name,
        });
    }
    if (!this.tags.find((v) => v.path === tag.path)) {
      this.tags.push(tag);
    }
  };

  @action('移除tag')
  public removeTag = (tag: ITagItem) => {
    // 不可关闭页签不能删除
    if (!tag.closable) {
      return;
    }
    const index = this.tags.findIndex((v) => v.path === tag.path);
    this.tags.splice(index, 1);
  };

  @action('选中高亮tag')
  public setActiveTag = (tag: ITagItem) => {
    this.activeTagCode = tag.code;
  };

  @action('关闭所有tag')
  public closeAllTag = () => {
    this.activeTagCode = this.tags[0].code;
    this.tags = this.tags.filter((v) => !v.closable);
  };

  @action('关闭其他tag')
  public closeOtherTag = () => {
    if (this.activeTagCode === this.tags[0].code) {
      this.closeAllTag();
      return;
    }
    const currentTag = this.tags.find((v) => v.code === this.activeTagCode);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.tags = [this.tags[0], currentTag!];
  };

  @action('设置主题')
  public setTheme = (theme: ThemeType) => {
    this.theme = theme;
    if (theme === 'dark' && !document.body.hasAttribute('theme')) {
      document.body.setAttribute('theme', 'dark');
      return;
    }
    if (document.body.hasAttribute('theme')) {
      document.body.removeAttribute('theme');
    }
  };

  @computed
  public get tagList() {
    const list = this.tags.slice(0);
    setTagNavListInStorage(list);
    return list;
  }

  @computed
  public get menuList() {
    return this.menuData.slice(0);
  }

  @computed
  public get menuFlattenList() {
    return this.menuFlattenData.slice(0);
  }
}

export { AppStore };
