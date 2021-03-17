export interface ITableHeaders {
  name: string;
  dataIndex: string;
}

export type ITableDataset<T> = T[];

export interface ITableActions<T> {
  buttonName: string;
  callback: (record: T) => void;
}
