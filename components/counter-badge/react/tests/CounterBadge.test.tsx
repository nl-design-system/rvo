/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { CounterBadge } from '../src/CounterBadge';
import { describe, it, expect } from 'vitest';

describe('CounterBadge', () => {
    it('Count of 5', () => {
        render(
            <CounterBadge data-testid="counter-badge-test" count={5} />
        );

        const element = screen.getByTestId('counter-badge-test');
        expect(element).toHaveClass('rvo-badge');
    });
});
