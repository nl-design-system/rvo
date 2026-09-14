import { ILinkProps } from '@nl-rvo/react-link';
import CardContent from './components/CardContent';
import CardHeader from './components/CardHeader';
import CardImage from './components/CardImage';

export interface CardComponents {
  Content: typeof CardContent;
  Header: typeof CardHeader;
  Image: typeof CardImage;
}

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImage?: string;
  backgroundColor?: 'none' | 'wit' | 'grijs-100' | 'hemelblauw';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  invertedColors?: boolean;
  outline?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ICardContentProps {
  contentMarkup?: string | React.ReactNode;
  children?: React.ReactNode;
}

export interface ICardHeaderProps extends Pick<ILinkProps, 'href' | 'LinkComponent'> {
  children?: React.ReactNode;
  className?: string;
  fullCardLink?: boolean;
  showLinkIndicator?: boolean;
  title?: string | React.ReactNode;
}

export interface ICardImageProps {
  imageAlt?: string;
  className?: string;
  imageSize?: 'sm' | 'md';
  imageSrc: string;
}
