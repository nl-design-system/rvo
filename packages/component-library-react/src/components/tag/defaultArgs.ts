import { HTMLAttributes } from 'react';
import { ITagProps } from './';

export const defaultArgs: ITagProps & HTMLAttributes<HTMLElement> = {
  content: 'Tag name',
};
