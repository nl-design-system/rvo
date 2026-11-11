/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Tag } from '../src/Tag';
import { describe, it, expect } from 'vitest';

describe('Tag', () => {
    it('Base Component', () => {
        render(
            <Tag data-testid="tag-test">Tag</Tag>
        );

        const element = screen.getByTestId('tag-test');
        expect(element).toHaveClass('rvo-tag');
    });
});
