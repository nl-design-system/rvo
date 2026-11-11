/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Tabs } from '../src/Tabs';
import { describe, it, expect } from 'vitest';

describe('Tabs', () => {
    it('with 3 tabs', () => {
        render(
            <Tabs
                data-testid="tabs-test"
                items={[
                    {
                        label: 'Tab 1',
                        panel: 'Panel 1 Content',
                    },
                    {
                        label: 'Tab 2',
                        panel: 'Panel 2 Content',
                    },
                    {
                        label: 'Tab 3',
                        panel: 'Panel 3 Content',
                    },
                ]}
            />
        );

        const element = screen.getByTestId('tabs-test');
        expect(element).toHaveClass('rvo-tabs');
    });
});
