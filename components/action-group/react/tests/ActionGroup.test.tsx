/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { ActionGroup } from '../src/ActionGroup';
import { describe, it, expect } from 'vitest';

describe('ActionGroup', () => {
    it('with one left and one right action', () => {
        render(
            <ActionGroup
                data-testid="action-group-test"
                buttonsLeft={[{ kind: "primary", size: "md", children: "Primary action" }]}
                buttonsRight={[{ kind: "secondary", size: "md", children: "Secondary action" }]}
                position="left"
                fullWidth={false}
            />
        );

        const element = screen.getByTestId('action-group-test');
        expect(element).toHaveClass('rvo-action-group');
    });
});
