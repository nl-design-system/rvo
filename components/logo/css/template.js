/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import logo from '../assets/logo.svg';

export const Logo = ({ className = '' }) => <img src={logo} className={clsx('rvo-logo', className)} />;
