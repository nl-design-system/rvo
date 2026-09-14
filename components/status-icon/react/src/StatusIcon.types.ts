export interface IStatusIconProps {
  type: 'info' | 'bevestiging' | 'foutmelding' | 'waarschuwing';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  className?: string;
  ignoreDefaultIconColor?: boolean;
}
