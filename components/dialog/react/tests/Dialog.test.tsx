/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Dialog } from '../src/Dialog';
import { describe, it, expect } from 'vitest';

describe('Dialog', () => {
    it('Render simple  with 5 children', () => {
        render(
            <Dialog data-testid="dialog-test">Dialog Content</Dialog>
        );

        const element = screen.getByTestId('dialog-test');
        expect(element).toHaveClass('rvo-dialog');
    });
});
