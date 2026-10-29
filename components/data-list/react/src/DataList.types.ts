import { ReactNode } from 'react';

export interface IDataListProps {
  children: ReactNode;
}

export interface IDataListItemProps {
  label: string | ReactNode;
  value: string | ReactNode;
}
