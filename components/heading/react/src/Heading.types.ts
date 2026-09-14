import { IconType } from '@nl-rvo/components/icon/react/src';

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  noMargins?: boolean;
  fontWeightNormal?: boolean;
  className?: string;
  showIcon?: 'before' | 'after';
  icon?: IconType;
}
