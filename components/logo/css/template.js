/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import '@nl-rvo/assets/images/logo.svg';

export const Logo = ({ className = '' }) => `<img src="/images/logo.svg" class="${clsx('rvo-logo', className)}" />`;
