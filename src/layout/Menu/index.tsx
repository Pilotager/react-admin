import './index.less';

import { FC, useEffect, useState } from 'react';
import { Menu, type MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { SelectInfo } from 'rc-menu/lib/interface';

type MenuItem = Required<MenuProps>['items'][number];

type IProps = {
  data: MenuItem[];
  selectedKey: string; // 当前选中的菜单项 key
  onSelectedChange: (key: string) => void;
};

const MenuWrap: FC<IProps> = ({ data = [], selectedKey, onSelectedChange }) => {
  const navigate = useNavigate();
  const [openKey, setOpenkey] = useState<string[]>([]);
  const [rootKey, setRootKey] = useState<string[]>([]);

  useEffect(() => {
    const key: string[] = [];
    data.forEach((v) => {
      v && key.push(v.key as string);
    });
    setRootKey(key);
  }, [data]);

  const onOpenChange = (keys: string[]): void => {
    const latestOpenKey = keys.find((key) => openKey.indexOf(key) === -1) || '';
    if (rootKey.indexOf(latestOpenKey) === -1) {
      setOpenkey(keys);
    } else {
      setOpenkey(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onSelect = ({ key }: SelectInfo): void => {
    onSelectedChange(key);
    navigate(key);
  };

  return (
    <Menu
      mode='inline'
      selectedKeys={[selectedKey]}
      openKeys={openKey}
      onOpenChange={onOpenChange}
      onSelect={onSelect}
      items={data}
    />
  );
};

export default MenuWrap;
