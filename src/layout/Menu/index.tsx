import './index.less';

import { FC, useEffect, useState, createElement } from 'react';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { SelectInfo } from 'rc-menu/lib/interface';
import { IMenuItem } from '@/interfaces';

type IProps = {
  data: IMenuItem[];
  selectedKey: string; // 当前选中的菜单项 key
  onSelectedChange: (key: string) => void;
};

// TODO 暂时先这么写
const iconToElement = (name: string) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createElement(Icon && (Icon as any)[name], {
    style: { fontSize: '16px' },
  });

const MenuWrap: FC<IProps> = ({ data = [], selectedKey, onSelectedChange }) => {
  const navigate = useNavigate();
  const [openKey, setOpenkey] = useState<string[]>([]);
  const [rootKey, setRootKey] = useState<string[]>([]);

  useEffect(() => {
    const key: string[] = [];
    data.forEach((v) => {
      v && key.push(v.url);
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
      items={data.map((v) => {
        return v.children
          ? {
              key: v.url,
              label: v.name,
              icon: iconToElement(v.icon),
              children: v.children.map((child) => ({
                key: child.url,
                label: child.name,
                icon: iconToElement(child.icon),
              })),
            }
          : {
              key: v.url,
              label: v.name,
              icon: iconToElement(v.icon),
            };
      })}
    />
  );
};

export default MenuWrap;
