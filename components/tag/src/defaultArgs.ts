import { HTMLAttributes } from 'react';
import { ITagProps } from './template';

export const defaultArgs: ITagProps & HTMLAttributes<HTMLElement> = {
  content: 'Tag name',
};
