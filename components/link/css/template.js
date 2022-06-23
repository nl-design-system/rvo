/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';

export const argTypes = {
  linkContent: {
    control: 'text',
  },
  linkUrl: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  hover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
};

export const defaultArgs = {
  linkContent: 'Dit is een link',
  linkUrl: '#',
  showIcon: 'no',
  hover: false,
  active: false,
  focus: false,
};

export const Link = ({
  linkContent = defaultArgs.linkContent,
  linkUrl = defaultArgs.linkUrl,
  showIcon = defaultArgs.showIcon,
  icon = 'pijl-naar-rechtsboven',
  hover = defaultArgs.hover,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
}) => {
  const iconMarkup = `<div class="${clsx(
    'rvo-link__icon',
    { 'rvo-link__icon--before': showIcon === 'before', 'rvo-link__icon--after': showIcon === 'after' },
    'rvo-icon',
    'rvo-icon--sm',
    'rvo-icon--hemelblauw',
    `rvo-icon--${icon}`,
  )}"/>`;

  return `<a href="${linkUrl}" class="${clsx('rvo-link', {
    'rvo-link--active': active,
    'rvo-link--hover': hover,
    'rvo-link--focus': focus,
  })}">${showIcon === 'before' ? iconMarkup : ''}${linkContent}${showIcon === 'after' ? iconMarkup : ''}</a>`;
};
