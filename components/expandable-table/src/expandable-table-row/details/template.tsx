/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import React, { ReactElement } from 'react';

export type DetailsType = ReactElement<IDetailsProps>;

export interface IDetailsProps {
  className?: string;
  children?: any;
}

export const Details: React.FC<IDetailsProps> = ({ children, className, ...otherProps }: IDetailsProps) => {
  return (
    <div className={className} role="region" aria-label="Uitklapbare details" {...otherProps}>
      {children}
    </div>
  );
};

export default Details;
