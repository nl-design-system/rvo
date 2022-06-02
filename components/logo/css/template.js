/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import logo from '@nl-rvo/assets/images/logo.svg';
import clsx from 'clsx';

export const Logo = ({ className = '' }) => `<img src="${logo}" class="${clsx('rvo-logo', className)}" />`;
