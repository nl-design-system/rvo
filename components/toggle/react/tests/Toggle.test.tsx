/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Toggle } from '../src/Toggle';
import { describe, it, expect } from 'vitest';

describe('Toggle', () => {
    it('Base Component', () => {
        render(
            <Toggle data-testid="toggle-test">Toggle</Toggle>
        );

        const element = screen.getByTestId('toggle-test');
        expect(element).toHaveClass('rvo-toggle');
    });
});
