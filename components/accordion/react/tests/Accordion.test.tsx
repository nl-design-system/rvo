/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Accordion } from '../src/Accordion';
import { describe, it, expect } from 'vitest';

describe('Accordion', () => {
    it('with 5 children', () => {
        render(
            <Accordion data-testid="accordion-test">
                <Accordion.Item title="Accordion Item 1" teaser="Teaser for accordion item 1">
                    Item Content
                </Accordion.Item>
                <Accordion.Item title="Accordion Item 2" teaser="Teaser for accordion item 2">
                    Item Content
                </Accordion.Item>
                <Accordion.Item title="Accordion Item 3" teaser="Teaser for accordion item 3">
                    Item Content
                </Accordion.Item>
                <Accordion.Item title="Accordion Item 4" teaser="Teaser for accordion item 4">
                    Item Content
                </Accordion.Item>
                <Accordion.Item title="Accordion Item 5" teaser="Teaser for accordion item 5">
                    Item Content
                </Accordion.Item>
            </Accordion>,
        );

        const element = screen.getByTestId('accordion-test');
        expect(element).toHaveClass('rvo-accordion');
        expect(element.childNodes.length).toBe(5)
    });
});
