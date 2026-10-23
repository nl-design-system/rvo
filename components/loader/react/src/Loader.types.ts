import { IButtonProps } from '@nl-rvo/react-button';

export interface ILoaderStatus {
  type: 'foutmelding' | 'waarschuwing';
  text: string;
}

export interface ILoader {
  animateLoader?: boolean;
  overlay?: boolean;
  status?: ILoaderStatus;
  primaryAction?: IButtonProps;
  secondaryAction?: IButtonProps;
}
