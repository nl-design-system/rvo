import { ReactNode } from 'react';

export interface IAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface IAccordionItemProps extends React.HTMLAttributes<HTMLDetailsElement> {
  title: string;
  teaser?: string;
  open?: boolean;
  children: ReactNode;
}
