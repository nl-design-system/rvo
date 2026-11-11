/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { StatusIndicator } from '../src/StatusIndicator';
import { describe, it, expect } from 'vitest';

describe('StatusIndicator', () => {
    it('Green status', () => {
        render(
            <StatusIndicator data-testid="status-indicator-test" color={'groen'} />
        );

        const element = screen.getByTestId('status-indicator-test');
        expect(element).toHaveClass('rvo-status-indicator');
    });
});
