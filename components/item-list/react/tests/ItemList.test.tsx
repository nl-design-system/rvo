/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { ItemList } from '../src/ItemList';
import { describe, it, expect } from 'vitest';

describe('ItemList', () => {
    it('with 3 items', () => {
        render(
            <ItemList data-testid="item-list-test" items={['List item', 'List item', 'List item']} />
        );

        const element = screen.getByTestId('item-list-test');
        expect(element).toHaveClass('rvo-item-list');
    });
});
