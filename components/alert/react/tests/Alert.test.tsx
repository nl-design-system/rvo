/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Alert } from '../src/Alert';
import { describe, it, expect } from 'vitest';

describe('Alert', () => {
    it('Default component render', () => {
        render(
            <Alert data-testid="alert-test" />
        );

        const element = screen.getByTestId('alert-test');
        expect(element).toHaveClass('rvo-alert', 'rvo-alert--info');
    });
});
