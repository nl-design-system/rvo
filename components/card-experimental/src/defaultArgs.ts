import { ICardImageProps } from './components/CardImage';
import { ICardLinkProps } from './components/CardLink';
import { ICardProps } from './template';

export type CardArguments = ICardProps & ICardImageProps & ICardLinkProps;

export const defaultArgs: CardArguments = {
  backgroundColor: 'none',
  backgroundImage: '',
  content: 'Content',
  fullCardLink: false,
  imageSize: 'md',
  imageSrc: '',
  invertedColors: false,
  outline: false,
  padding: 'sm',
  showLinkIndicator: false,
  title: 'Title',
};
