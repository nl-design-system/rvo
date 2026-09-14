import { HTMLAttributes } from 'react';

export interface ICounterBadge extends HTMLAttributes<HTMLSpanElement> {
  count: number;
}
