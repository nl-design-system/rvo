import { ReactNode } from 'react';

export interface IExpandableContentProps extends React.HTMLAttributes<HTMLDetailsElement> {
  title: string;
  open?: boolean;
  subtle?: boolean;
  showIcon?: boolean;
  children: ReactNode | string;
}
