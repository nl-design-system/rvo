import { IBreadcrumbProps } from './template';

export const defaultArgs: IBreadcrumbProps = {
  items: [
    { label: 'First step', url: '#' },
    { label: 'Second step', url: '#' },
    { label: 'Third step', url: '#' },
    { label: 'Current page' },
  ],
  size: 'sm',
};
