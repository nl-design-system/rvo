/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'rvo-button',
  styleUrl: 'bem.scss',
  shadow: true,
})
export class Button {
  render() {
    return (
      <button class="rvo-button" type="button">
        <span class="rvo-button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
