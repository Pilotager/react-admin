import './index.less';

import { FC } from 'react';
import { Tabs } from 'antd';

const tags = [
  {
    path: '',
    closable: true,
    label: '1',
  },
];

const TagsNav: FC = () => {
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
