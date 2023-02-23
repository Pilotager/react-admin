import type { ITagItem, IMenuItem } from '@/interfaces';

/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInStorage = (list: ITagItem[]): void => {
  sessionStorage.tagNaveList = JSON.stringify(list);
};

/**
 * @description 展开导航菜单为一维数组
 */
export const flattenMenu = (data: IMenuItem[]): IMenuItem[] => {
  const arr: IMenuItem[] = [];
  const fun = (meun: IMenuItem[]) => {
    meun.forEach((v) => {
      arr.push(v);
      if (v.children) {
        fun(v.children);
      }
    });
  };
  fun(data);
  return arr;
};
