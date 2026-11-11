/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { ExpandableContent } from '../src/ExpandableContent';
import { describe, it, expect } from 'vitest';

describe('ExpandableContent', () => {
    it('Default Component', () => {
        render(
            <ExpandableContent data-testid="expandable-content-test" title='Title'>Content</ExpandableContent>
        );

        const element = screen.getByTestId('expandable-content-test');
        expect(element).toHaveClass('rvo-expandable-content');
    });
});
