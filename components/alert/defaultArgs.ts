import { IAlertProps } from './template';

export const defaultArgs: IAlertProps = {
  kind: 'info',
  heading: '',
  content: `This is an example of an alert, with a <a href="#" class="rvo-link">link</a> inside.`,
  closable: false,
};
