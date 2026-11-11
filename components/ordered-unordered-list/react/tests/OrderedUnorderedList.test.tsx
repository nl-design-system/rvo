/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { List } from '../src/OrderedUnorderedList';
import { describe, it, expect } from 'vitest';

describe('OrderedUnorderedList', () => {
    it('ordered list with 5 items', () => {
        render(
            <List data-testid="list-test" type={'ordered'} items={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']} />
        );

        const element = screen.getByTestId('list-test');
        expect(element).toHaveClass('rvo-ol');
    });
});
