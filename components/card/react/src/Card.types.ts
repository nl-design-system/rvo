import { IHeadingProps } from '@nl-rvo/react-heading';
import { ILinkProps } from '@nl-rvo/react-link';
import { HTMLAttributes, ReactNode } from 'react';

export interface ICardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, Pick<ILinkProps, 'LinkComponent'> {
  background?: 'none' | 'color' | 'image';
  backgroundColor?: 'none' | 'wit' | 'grijs-100' | 'hemelblauw' | 'lichtblauw-150';
  backgroundImage?: string;
  children?: ReactNode | undefined;
  className?: string;
  content?: string;
  fullCardLink?: boolean;
  headingClassName?: string;
  headingProps?: IHeadingProps;
  image?: ReactNode;
  imageAlt?: string;
  imageHeight?: string;
  imageLine?: 'none' | 'top-right' | 'bottom-left';
  imageSize?: 'sm' | 'md';
  imageWidth?: string;
  inlineImage?: boolean;
  invertedColors?: boolean;
  layout?: 'column' | 'row';
  link?: string;
  linkClassName?: string;
  linkProps?: Omit<ILinkProps, 'children'>;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  outline?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  showLinkIndicator?: boolean;
  title?: string | ReactNode;
}
