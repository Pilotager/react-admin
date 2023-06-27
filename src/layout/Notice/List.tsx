import { FC } from 'react';
import { List, Avatar } from 'antd';

type IProps = {
  data?: any[];
};

const ListWrap: FC<IProps> = ({ data = [] }) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className='admin-notice_content__item'>
          <List.Item.Meta
            avatar={
              <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
            }
            title={<div className='admin-notice_content__title'>{item.title}</div>}
            description='6年前'
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

export default ListWrap;
