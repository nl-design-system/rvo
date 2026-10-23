import { HTMLAttributes } from 'react';

export interface IFieldsetProps extends HTMLAttributes<HTMLFieldSetElement> {
  legend?: string;
  disabled?: boolean;
}
