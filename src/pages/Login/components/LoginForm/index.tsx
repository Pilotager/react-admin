import './index.less';

import { FC } from 'react';
import { Form, Button, Input, Checkbox } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { ILoginReq } from '@/interfaces';

const { Item } = Form;

type ILoginForm = {
  onFinish?: (values: ILoginReq) => void;
};

const LoginForm: FC<ILoginForm> = ({ onFinish: onFinishProps }) => {
  const onFinish = (values: ILoginReq): void => {
    onFinishProps?.(values);
  };

  return (
    <div className='login-content_form'>
      <Form autoComplete='off' size='large' onFinish={onFinish} initialValues={{ remember: true }}>
        <Item name='username' rules={[{ required: true, message: '用户名是必填项！' }]}>
          <Input placeholder='用户名' prefix={<UserOutlined />} />
        </Item>
        <Item name='password' rules={[{ required: true, message: '密码是必填项！' }]}>
          <Input.Password placeholder='密码' prefix={<UnlockOutlined />} />
        </Item>
        <Item>
          <Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>自动登录</Checkbox>
          </Item>
          <a className='login-content_form__forgot' href=''>
            忘记密码 ?
          </a>
        </Item>
        <Item>
          <Button type='primary' htmlType='submit' block>
            登录
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default LoginForm;
