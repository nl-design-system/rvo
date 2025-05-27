import { ICardContentProps } from './components/CardContent';
import { ICardHeaderProps } from './components/CardHeader';
import { ICardImageProps } from './components/CardImage';
import { ICardProps } from './template';

export type CardArguments = ICardProps & ICardImageProps & ICardHeaderProps & ICardContentProps;

export const defaultArgs: CardArguments = {
  backgroundColor: 'none',
  backgroundImage: '',
  content: 'Content',
  fullCardLink: false,
  href: '',
  imageSize: 'md',
  imageSrc: '',
  invertedColors: false,
  outline: false,
  padding: 'sm',
  showLinkIndicator: false,
  title: 'Title',
};
