import './index.less';

import { FC } from 'react';
import { observer } from 'mobx-react';
import { Badge, Dropdown, Tabs, List, type TabsProps } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import ListWrap from './List';

const Notice: FC = () => {
  return (
    <Dropdown
      className='admin-notice'
      trigger={['click']}
      dropdownRender={() => <DropdownRenderEl />}>
      <div className='admin-notice_box'>
        <Badge count={1}>
          <BellOutlined className='admin-layout-header_notice' />
        </Badge>
      </div>
    </Dropdown>
  );
};

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const tabItems: TabsProps['items'] = [
  {
    key: '1',
    label: '通知（4）',
    children: <ListWrap data={data} />,
  },
  {
    key: '2',
    label: '消息（4）',
    children: <ListWrap />,
  },
  {
    key: '3',
    label: '代办（4）',
    children: <ListWrap />,
  },
];

const DropdownRenderEl = () => {
  return (
    <div className='admin-notice_content'>
      <Tabs defaultActiveKey='1' centered items={tabItems} />
    </div>
  );
};

export default observer(Notice);
