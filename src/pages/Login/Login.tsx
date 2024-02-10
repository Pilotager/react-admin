import './Login.less';

import { FC } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import store from '@/stores';
import { Helmet, LoginForm } from './components';

const Login: FC = () => {
  const { login } = useLocalObservable(() => store.userStore);

  return (
    <div className='login'>
      <div className='login-content'>
        <Helmet />
        <LoginForm onFinish={login} />
      </div>
    </div>
  );
};

export default observer(Login);
