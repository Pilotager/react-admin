import './index.less';

import { FC } from 'react';
import { Tabs } from 'antd';
import { ITagItem } from '@/interfaces';

type IProps = {
  tags: ITagItem[];
};

const TagsNav: FC<IProps> = ({ tags = [] }) => {
  return (
    <div className='admin-layout-tab'>
      <Tabs
        tabBarStyle={{ margin: 0 }}
        type='editable-card'
        hideAdd
        items={tags.map((tag) => {
          return {
            key: tag.path,
            closable: tag.closable,
            label: tag.label,
          };
        })}
      />
    </div>
  );
};

export default TagsNav;
