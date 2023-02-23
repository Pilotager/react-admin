import './index.less';

import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import { isEqual } from 'lodash';
import type { ITagItem } from '@/interfaces';

type IProps = {
  data: ITagItem[];
  activeTagCode: string;
};

const areEqual = (prevProps: Readonly<IProps>, nextProps: Readonly<IProps>): boolean => {
  return (
    isEqual(prevProps.data, nextProps.data) && prevProps.activeTagCode === nextProps.activeTagCode
  );
};

const TagsNav: FC<IProps> = ({ data = [], activeTagCode = '' }) => {
  const navigate = useNavigate();

  const onChange = (activeKey: string): void => {
    const tag = data.find((v) => v.code === activeKey);
    if (tag) {
      navigate(tag.path);
    }
  };

  return (
    <div className='admin-layout-tab'>
      <Tabs
        tabBarStyle={{ margin: 0 }}
        type='editable-card'
        activeKey={activeTagCode}
        onChange={onChange}
        hideAdd
        items={data.map((tag) => {
          return {
            key: tag.code,
            closable: tag.closable,
            label: tag.label,
          };
        })}
      />
    </div>
  );
};

export default memo(TagsNav, areEqual);
