/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from '../src/Breadcrumbs';
import { describe, it, expect } from 'vitest';

describe('Breadcrumbs', () => {
    it('with 4 items', () => {
        render(
            <Breadcrumbs
                data-testid="breadcrumbs-test"
                items={[
                    { label: "First step", link: "#" },
                    { label: "Second step", link: "#" },
                    { label: "Third step", link: "#" },
                    { label: "Current page" },
                ]}
            />
        );

        const element = screen.getByTestId('breadcrumbs-test');
        expect(element).toHaveClass('rvo-breadcrumbs');
        expect(element.childNodes.length).toBe(4)
    });
});
