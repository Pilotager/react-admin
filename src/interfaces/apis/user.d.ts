/** *********** 菜单列表 *************/
export interface IMenuItem {
  code: string;
  icon: string;
  url: string;
  name: string;
  parent?: string;
  children: IMenuItem[];
}
