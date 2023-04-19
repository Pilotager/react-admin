import './index.less';

import { FC } from 'react';
import { Form, Input, Select, FormProps } from 'antd';
import { IForm } from './types';

const { Item } = Form;

const layout: FormProps = {
  layout: 'inline',
};

const FormSchema: FC<IForm> = ({ schema = [] }) => {
  return (
    <Form {...layout}>
      {schema.map((v) => (
        <Item key={v.dataIndex} label={v.label}>
          {v.valueType === 'input' && (
            <Input style={{ width: v.width }} placeholder={v.placeholder} />
          )}
          {v.valueType === 'select' && (
            <Select style={{ width: v.width }} placeholder={v.placeholder} />
          )}
        </Item>
      ))}
    </Form>
  );
};

export { FormSchema };
