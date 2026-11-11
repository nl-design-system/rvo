/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Heading } from '../src/Heading';
import { describe, it, expect } from 'vitest';

describe('Heading', () => {
    it('h1 heading', () => {
        render(
            <Heading data-testid="heading-test" type='h1'>Heading 1</Heading>
        );

        const element = screen.getByTestId('heading-test');
        expect(element).toHaveClass('rvo-heading');
    });
});
