/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { SidebarLayout } from '../src/SidebarLayout';
import { describe, it, expect } from 'vitest';

describe('SidebarLayout', () => {
    it('Left sidebar', () => {
        render(
            <SidebarLayout
                data-testid="sidebar-layout-test"
                sidebarPosition='left'
                sidebarBackgroundColor={true}
                sidebarContent='Sidebar'
            >
                Content
            </SidebarLayout>
        );

        const element = screen.getByTestId('sidebar-layout-test');
        expect(element).toHaveClass('rvo-sidebar-layout');
    });
});
