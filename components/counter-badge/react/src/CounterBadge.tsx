import React from 'react';
import '@nl-rvo/css-counter-badge/counter-badge.css';
import { ICounterBadge } from './CounterBadge.types';

export const CounterBadge: React.FC<ICounterBadge> = (props: ICounterBadge) => {
  const { count = 0, ...rest } = props;

  return (
    <span className="rvo-badge" {...rest}>
      {count > 99 ? `99+` : count}
    </span>
  );
};

export default CounterBadge;
