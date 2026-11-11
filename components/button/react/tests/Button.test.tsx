/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Button } from '../src/Button';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
    it('Default Button', () => {
        render(
            <Button data-testid="button-test">Button</Button>
        );

        const element = screen.getByTestId('button-test');
        expect(element).toHaveClass('rvo-button');
    });
});
