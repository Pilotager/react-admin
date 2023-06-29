import './index.less';

import { FC, memo } from 'react';
import { Badge, Dropdown, Tabs } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { observer, useLocalObservable } from 'mobx-react';
import type { INoticeItem } from '@/interfaces';
import store from '@/stores';
import ListWrap from './List';

type INotice = {
  data: INoticeItem[];
};

const Notice: FC<INotice> = ({ data = [] }) => {
  return (
    <Dropdown
      className='admin-notice'
      trigger={['click']}
      dropdownRender={() => <DropdownRenderEl data={data} />}>
      <div className='admin-notice_box'>
        <Badge count={data.length}>
          <BellOutlined className='admin-layout-header_notice' />
        </Badge>
      </div>
    </Dropdown>
  );
};

type IDropdownRenderEl = {
  data: INoticeItem[];
};

const DropdownRenderEl: FC<IDropdownRenderEl> = ({ data = [] }) => {
  const { onNoticeClick } = useLocalObservable(() => store.userStore);

  const notificationList = data.filter((v) => v.type === 'notification');
  const messageList = data.filter((v) => v.type === 'message');
  const todoList = data.filter((v) => v.type === 'event');

  return (
    <div className='admin-notice_content'>
      <Tabs
        defaultActiveKey='1'
        centered
        items={[
          {
            key: '1',
            label: `通知（${notificationList.length}）`,
            children: (
              <ListWrap data={notificationList} type='notification' onClick={onNoticeClick} />
            ),
          },
          {
            key: '2',
            label: `通知（${messageList.length}）`,
            children: <ListWrap data={messageList} type='message' onClick={onNoticeClick} />,
          },
          {
            key: '3',
            label: `通知（${todoList.length}）`,
            children: <ListWrap data={todoList} type='event' onClick={onNoticeClick} />,
          },
        ]}
      />
    </div>
  );
};

export default observer(Notice);
