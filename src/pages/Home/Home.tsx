import { FC } from 'react';
import { FormSchema } from '@/components';
import { ISchemaItem } from '@/components/FormSchema/types';

const columns: ISchemaItem[] = [
  {
    label: '姓名',
    valueType: 'input',
    dataIndex: 'name',
    width: 200,
    placeholder: '请输入姓名',
  },
  {
    label: '手机号',
    valueType: 'input',
    dataIndex: 'phone',
    width: 200,
    placeholder: '请输入手机号',
  },
  {
    label: '状态',
    valueType: 'select',
    dataIndex: 'status',
    width: 200,
    placeholder: '请选择状态',
  },
  {
    label: '时间',
    valueType: 'datePicker',
    dataIndex: 'date',
    placeholder: '请选择时间',
  },
];

const Home: FC = () => {
  return <FormSchema schema={columns} />;
};

export default Home;
