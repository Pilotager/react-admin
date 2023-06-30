import './Login.less';

import { FC } from 'react';
import { Helmet, LoginForm } from './components';

const Login: FC = () => {
  return (
    <div className='login'>
      <div className='login-content'>
        <Helmet />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
