import { Key } from 'react';

export interface IForm {
  schema: ISchemaItem[];
}

type ValueType = 'input' | 'select' | 'datePicker';

export interface ISchemaItem {
  label: string; // 标题的内容
  valueType: ValueType;
  dataIndex: Key;
  width?: number;
  placeholder?: string;
}
