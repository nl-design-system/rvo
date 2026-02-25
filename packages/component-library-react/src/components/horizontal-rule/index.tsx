/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import '@nl-rvo/css-horizontal-rule/dist/index.css';

interface IHrProps {}

export const Hr: React.FC<IHrProps & React.HTMLAttributes<HTMLHRElement>> = (props) => (
  <hr className="rvo-hr" {...props} />
);

export default Hr;
