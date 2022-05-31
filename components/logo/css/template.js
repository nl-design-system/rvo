/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import logo from '@nl-rvo/assets/logo.svg';
import clsx from 'clsx';
import React from 'react';

export const Logo = ({ className = '' }) => <img src={logo} className={clsx('rvo-logo', className)} />;
