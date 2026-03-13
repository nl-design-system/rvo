import { IBreadcrumbProps } from './';

export const defaultArgs: IBreadcrumbProps = {
  items: [
    { label: 'First step', link: '#' },
    { label: 'Second step', link: '#' },
    { label: 'Third step', link: '#' },
    { label: 'Current page' },
  ],
  size: 'sm',
};
