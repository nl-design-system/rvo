export interface IImageSource {
  srcSet: string;
  type?: string;
  media?: string;
}

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  radius?: 'none' | 'all' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  radiusSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  sources?: IImageSource[];
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number | string;
  height?: number | string;
  className?: string;
}
