/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { ScrollableContent } from '../src/ScrollableContent';
import { describe, it, expect } from 'vitest';

describe('ScrollableContent', () => {
    it('Render simple  with 5 children', () => {
        render(
            <ScrollableContent data-testid="scrollable-content-test">Content</ScrollableContent>
        );

        const element = screen.getByTestId('scrollable-content-test');
        expect(element).toHaveClass('rvo-scrollable-content');
    });
});
