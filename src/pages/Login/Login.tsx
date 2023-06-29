import './Login.less';

import { FC } from 'react';
import { Helmet } from './components';

const Login: FC = () => {
  return (
    <div className='login'>
      <div className='login-content'>
        <Helmet />
      </div>
    </div>
  );
};

export default Login;
