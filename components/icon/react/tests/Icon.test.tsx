/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Icon } from '../src/Icon';
import { describe, it, expect } from 'vitest';

describe('Icon', () => {
    it('Home Icon', () => {
        render(
            <Icon data-testid="icon-test" icon="home" />
        );

        const element = screen.getByTestId('icon-test');
        expect(element).toHaveClass('rvo-icon');
    });
});
