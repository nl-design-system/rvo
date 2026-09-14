import { ReactNode } from 'react';

type HeroImage =
  | {
      src: string;
      alt: string;
      loading?: 'eager' | 'lazy';
      fetchPriority?: 'high' | 'low' | 'auto';
      decoding?: 'async' | 'sync' | 'auto';
      width?: number;
      height?: number;
      srcSet?: string;
      sizes?: string;
    }
  | React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;

export interface IHeroProps {
  image: HeroImage;
  title?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode | undefined;
  kind?: 'lichtblauw' | 'violet';
  showLine?: boolean;
}
