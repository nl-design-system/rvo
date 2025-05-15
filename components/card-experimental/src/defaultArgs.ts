import { ICardImageProps } from './components/CardImage';
import { ICardLinkProps } from './components/CardLink';
import { ICardProps } from './template';

export const defaultArgs: ICardProps & ICardImageProps & ICardLinkProps = {
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
