/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Image } from '../src/Image';
import { describe, it, expect } from 'vitest';

describe('Image', () => {
    it('with rounded corners', () => {
        render(
            <Image
                data-testid="image-test"
                src="https://fastly.picsum.photos/id/1003/200/300.jpg?hmac=EyW0hjzA-KJ6r3bbEy9Ufw2Y2SeTmRSnusDY_g2czPg"
                alt='Alttext'
                radius='all'
            />
        );

        const element = screen.getByTestId('image-test');
        expect(element).toHaveClass('rvo-image', 'rvo-image--radius-all');
    });
});
