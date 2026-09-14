import { ReactNode } from 'react';

export interface IHeaderProps {
  title?: string;
  subtitle?: string;
  link?: string;
  children?: ReactNode | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
