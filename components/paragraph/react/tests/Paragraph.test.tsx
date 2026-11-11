/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Paragraph } from '../src/Paragraph';
import { describe, it, expect } from 'vitest';

describe('Paragraph', () => {
    it('Base', () => {
        render(
            <Paragraph data-testid="paragraph-test">
                This is a simple paragraph.
            </Paragraph>
        );

        const element = screen.getByTestId('paragraph-test');
        expect(element).toHaveClass('rvo-paragraph');
    });
});
