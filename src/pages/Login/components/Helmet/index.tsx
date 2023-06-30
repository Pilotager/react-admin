import './index.less';

import { FC } from 'react';
import { stabilizeIcon } from '@/assets';

const Helmet: FC = () => {
  return (
    <div className='helmet'>
      <div className='helmet-header'>
        <div className='helmet-header_logo'>
          <img src={stabilizeIcon} alt='' />
        </div>
        <span className='helmet-header_title'>React Admin</span>
      </div>
      <div className='helmet-desc'>稳定、可靠的后台管理系统</div>
    </div>
  );
};

export default Helmet;
