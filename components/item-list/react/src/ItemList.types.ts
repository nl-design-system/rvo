import { ReactNode } from 'react';

export interface IItemListProps {
  items: string[] | ReactNode[];
  children?: ReactNode | undefined;
}
