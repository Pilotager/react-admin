import './index.less';

import { FC, memo } from 'react';

const Loading: FC = () => {
  return (
    <div className='page-loading'>
      <svg
        className='page-loading-inner'
        width='36'
        height='36'
        viewBox='0 0 36 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='18'
          cy='18'
          r='17'
          strokeWidth='1.5'
          stroke='#2d2d3d'
          strokeOpacity='1'></circle>
        <circle cx='18' cy='18' r='17' stroke='url(#spinner_gradient)' strokeWidth='1.5'></circle>
        <defs>
          <linearGradient
            id='spinner_gradient'
            x1='36'
            y1='18'
            x2='24.75'
            y2='22.25'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#FFF'></stop>
            <stop offset='0.78125' stopColor='#FFF' stopOpacity='0'></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default memo(Loading);
