import { FC, memo } from 'react';
import { List, Avatar, Tag } from 'antd';
import type { INoticeItem, NoticeType } from '@/interfaces';

type IProps = {
  data: INoticeItem[];
  type: NoticeType;
};

const tagColor = {
  todo: '',
  urgent: 'red',
  processing: 'blue',
  doing: 'gold',
};

const ListWrap: FC<IProps> = ({ data = [], type }) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item) => (
        <List.Item className='admin-notice_content__item'>
          <List.Item.Meta
            avatar={!item.avatar ? null : <Avatar src={item.avatar} />}
            title={
              <div className='admin-notice_content__title'>
                {item.title}
                {type === 'event' && (
                  <Tag className='tag' color={tagColor[item.status || 'todo']}>
                    {item.extra}
                  </Tag>
                )}
              </div>
            }
            description={
              <div>
                {!!item.description && <div className='description'>{item.description}</div>}
                {!!item.datetime && <div className='datetime'>{item.datetime}</div>}
              </div>
            }
          />
        </List.Item>
      )}
      footer={
        <div className='admin-notice_content__footer'>
          <div>清空通知</div>
          <div>查看更多</div>
        </div>
      }
    />
  );
};

export default memo(ListWrap);
