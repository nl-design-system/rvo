/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { PageNumberNavigation } from '../src/PageNumberNavigation';
import React from 'react';

describe('PageNumberNavigation', () => {
  describe('HTML attributes', () => {
    it('renders a nav with the base class, custom className and passes through attributes', () => {
      render(
        <PageNumberNavigation numberOfPages={5} activePage={1} className="custom" aria-label="Paginering" id="pager" />,
      );

      const nav = screen.getByRole('navigation', { name: 'Paginering' });
      expect(nav).toHaveClass('rvo-pagination', 'custom');
      expect(nav).toHaveAttribute('id', 'pager');
    });
  });
});
