import { ReactNode } from 'react';

export interface ILayoutFlowProps {
  gap?: '0' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  row?: boolean;
  wrap?: boolean;
  alignItems?: '' | 'start' | 'center' | 'end';
  alignContent?: '' | 'start' | 'center' | 'end' | 'space-between';
  justifyItems?: '' | 'start' | 'center' | 'end';
  justifyContent?: '' | 'start' | 'center' | 'end' | 'space-between';
  children?: ReactNode | undefined;
}
