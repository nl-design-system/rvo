import React, { ReactNode } from 'react';

export interface IScrollableContentProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  useAsMinimumHeight?: boolean;
  children?: ReactNode | undefined;
  disableScroll?: boolean;
  useStyleAttribute?: boolean;
}
