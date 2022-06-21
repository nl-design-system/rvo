/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

export const argTypes = {
  title: {
    control: 'text',
  },
  text: {
    control: 'text',
  },
  open: {
    control: 'boolean',
  },
};

export const defaultArgs = {
  title: 'Expandable text title',
  text: 'Expandable text content',
  open: false,
};

export const ExpandableText = ({ title = defaultArgs.title, text = defaultArgs.text, open = defaultArgs.open }) =>
  `<details class="rvo-expandable-text"
  ${
    open ? ' open' : ''
  }><summary class="rvo-expandable-text__summary">${title}</summary><span class="rvo-expandable-text__details">${text}</span></details>`;
