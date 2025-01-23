import { HTMLAttributes } from 'react';
import './index.scss';

export interface ICounterBadge extends HTMLAttributes<HTMLSpanElement> {
  count: number;
}

export const CounterBadge = (props: ICounterBadge) => {
  const { count = 0, ...rest } = props;

  return (
    <span className="rvo-badge" {...rest}>
      {count > 99 ? `99+` : count}
    </span>
  );
};

export default CounterBadge;
