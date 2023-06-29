import './index.less';

import { FC } from 'react';

const Helmet: FC = () => {
  return (
    <div className='helmet'>
      <div className='helmet-header'>
        <span className='helmet-header_title'>React Admin</span>
      </div>
      <div className='helmet-desc'>后台管理系统</div>
    </div>
  );
};

export default Helmet;
