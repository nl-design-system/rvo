/**
 * @license CC0-1.0
 * Copyright (c) 2025 Community for NL Design System
 */

import { IImageProps } from './template';

/**
 * Default arguments for the Image component.
 * Shared by Storybook and tests.
 */
export const defaultArgs: IImageProps = {
  src: 'https://placehold.co/600x400',
  alt: 'Voorbeeldafbeelding',
  caption: 'Dit is een voorbeeldafbeelding met toegankelijke alt-tekst.',
  width: 600,
  height: 400,
};
