import { ReactNode } from 'react';

export const parseChildren = (children: ReactNode | string) => {
  if (typeof children === 'string') {
    return children.split(/\r?\n|\r|\n/g);
  }
  return children;
};
