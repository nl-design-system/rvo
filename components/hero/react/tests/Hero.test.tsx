/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Hero } from '../src/Hero';
import { describe, it, expect } from 'vitest';

describe('Hero', () => {
    it('with just an image', () => {
        render(
            <Hero
                data-testid="hero-test"
                image={{
                    src: 'https://fastly.picsum.photos/id/1003/200/300.jpg?hmac=EyW0hjzA-KJ6r3bbEy9Ufw2Y2SeTmRSnusDY_g2czPg',
                    alt: 'Hero Image',
                }}
            />
        );

        const element = screen.getByTestId('hero-test');
        expect(element).toHaveClass('rvo-hero');
    });
});
