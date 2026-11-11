/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Link } from '../src/Link';
import { describe, it, expect } from 'vitest';

describe('Link', () => {
    it('Base link', () => {
        render(
            <Link data-testid="link-test" href='www.google.nl'>Test Link</Link>
        );

        const element = screen.getByTestId('link-test');
        expect(element).toHaveClass('rvo-link');
    });
});
