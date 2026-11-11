/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Table } from '../src/Table';
import { describe, it, expect } from 'vitest';

describe('Table', () => {
    it('render with 4 rows and 4 columns', () => {
        render(
            <Table
                data-testid="table-test"
                columns={[
                    { label: "Title", sortable: true, size: "md" },
                    { label: "Text", sortable: true, sortDirection: "ASC" },
                    { label: "Price ($)", sortable: true, type: "numeric" },
                    { label: "Link", sortable: true },
                ]}
                rows={[
                    ["Title value 1", "Text value 1", "57", '<a href="#" class="rvo-link">Link 1</a>'],
                    ["Title value 2", "Text value 2", "12.50", '<a href="#" class="rvo-link">Link 2</a>'],
                    ["Title value 3", "Text value 3", "90", '<a href="#" class="rvo-link">Link 3</a>'],
                    ["Title value 4", "Text value 4", "1.50", '<a href="#" class="rvo-link">Link 4</a>'],
                ]}
            />
        );

        const element = screen.getByTestId('table-test');
        expect(element).toHaveClass('rvo-table--responsive');
    });
});
