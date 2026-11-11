/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Card } from '../src/Card';
import { describe, it, expect } from 'vitest';

describe('Card', () => {
    it('Default Render', () => {
        render(
            <Card data-testid="card-test" title="Title">Content</Card>
        );

        const element = screen.getByTestId('card-test');
        expect(element).toHaveClass('rvo-card');
    });
});
