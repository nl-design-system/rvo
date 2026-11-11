/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Quote } from '../src/Quote';
import { describe, it, expect } from 'vitest';

describe('Quote', () => {
    it('Base Componont', () => {
        render(
            <Quote
                data-testid="quote-test"
                quote={'Hier is een goede quote!'}
                user={{
                    name: 'Willem Wever',
                    role: 'Presentator',
                    image: undefined
                }}
            />
        );

        const element = screen.getByTestId('quote-test');
        expect(element).toHaveClass('rvo-quote');
    });
});
