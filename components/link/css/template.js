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
};

export const defaultArgs = {
  linkContent: 'Dit is een link',
  linkUrl: '#',
  showIcon: 'no',
};

export const Link = ({
  linkContent = defaultArgs.linkContent,
  linkUrl = defaultArgs.linkUrl,
  showIcon = defaultArgs.showIcon,
  icon = 'pijl-naar-rechtsboven',
}) => {
  const iconMarkup = `<span class="${clsx(
    'rvo-link__icon',
    { 'rvo-link__icon--before': showIcon === 'before', 'rvo-link__icon--after': showIcon === 'after' },
    'rvo-icon',
    'rvo-icon--small',
    'rvo-icon--hemelblauw',
    `rvo-icon--${icon}`,
  )}"></span>`;

  return `<a href="${linkUrl}" class="rvo-link">${showIcon === 'before' ? iconMarkup : ''}${linkContent}${
    showIcon === 'after' ? iconMarkup : ''
  }</a>`;
};
