/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import './index.scss';

interface IHrProps extends React.HTMLAttributes<HTMLHRElement> {}

export const Hr: React.FC<IHrProps> = (props: IHrProps) => <hr className="rvo-hr" {...props} />;

export default Hr;
