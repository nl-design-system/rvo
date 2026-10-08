import React, { ReactNode } from 'react';
import { ILinkProps } from '@nl-rvo/react-link';

export interface IProgressTrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | undefined;
  steps?: IProgressTrackerStepProps[];
}

export interface IProgressTrackerStepProps {
  state: 'start' | 'incomplete' | 'doing' | 'completed' | 'disabled' | 'end';
  line: 'none' | 'straight' | 'substep-start' | 'substep-end';
  size: 'sm' | 'md';
  label: string;
  link?: string;
  onClick?: ILinkProps['onClick'];
}
