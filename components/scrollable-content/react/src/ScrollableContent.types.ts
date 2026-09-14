import { ReactNode } from 'react';

export interface IScrollableContentProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  useAsMinimumHeight?: boolean;
  content?: string;
  children?: ReactNode | undefined;
  disableScroll?: boolean;
  useStyleAttribute?: boolean;
}
