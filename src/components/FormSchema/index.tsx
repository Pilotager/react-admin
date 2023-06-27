import './index.less';

import { FC } from 'react';
import { Form, Input, Select, FormProps, DatePicker } from 'antd';
import { IForm } from './types';

const { Item } = Form;
const { RangePicker } = DatePicker;

const layout: FormProps = {
  layout: 'inline',
};

const FormSchema: FC<IForm> = ({ schema = [] }) => {
  return (
    <Form className='admin-form' {...layout}>
      {schema.map((v) => (
        <Item key={v.dataIndex} label={v.label}>
          {v.valueType === 'input' && (
            <Input style={{ width: v.width }} placeholder={v.placeholder} />
          )}
          {v.valueType === 'select' && (
            <Select style={{ width: v.width }} placeholder={v.placeholder} />
          )}
          {v.valueType === 'datePicker' && (
            <RangePicker style={{ width: v.width }} />
          )}
        </Item>
      ))}
    </Form>
  );
};

export { FormSchema };
