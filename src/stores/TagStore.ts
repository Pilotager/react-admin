import { makeAutoObservable, action, computed } from 'mobx';
import type { ITagItem } from '@/interfaces';

// 页签全局Store
class TagStore {
  constructor() {
    makeAutoObservable(this);
  }

  public activeTagCode = ''; // 当前高亮tag
  private tags: ITagItem[] = []; // 页签数据

  @action('添加tag')
  public addTag = (tag: ITagItem) => {
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
    this.activeTagCode = tag.path;
  };

  @action('关闭所有tag')
  public closeAllTag = () => {
    this.activeTagCode = this.tags[0].path;
    this.tags = this.tags.filter((v) => !v.closable);
  };

  @action('关闭其他tag')
  public closeOtherTag = () => {
    if (this.activeTagCode === this.tags[0].path) {
      this.closeAllTag();
      return;
    }
    const currentTag = this.tags.find((v) => v.path === this.activeTagCode);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.tags = [this.tags[0], currentTag!];
  };

  @computed
  public get tagList() {
    return this.tags.slice(0);
  }
}

export { TagStore };
