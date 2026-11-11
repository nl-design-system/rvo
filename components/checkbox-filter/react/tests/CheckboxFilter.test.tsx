/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { CheckBoxFilter } from '../src/CheckboxFilter';
import { describe, it, expect } from 'vitest';

describe('CheckboxFilter', () => {
    it('Render simple  with 5 children', () => {
        render(
            <CheckBoxFilter
                data-testid="checkbox-filter-test"
                options={[
                    { id: 'Agro en visserij', label: 'Agro en visserij' },
                    { id: 'Biotechnologie', label: 'Biotechnologie' },
                    {
                        id: 'Bosbouw en hout(bewerkings)industrie',
                        label: 'Bosbouw en hout(bewerkings)industrie',
                    },
                    { id: 'Bouw en infrastructuur', label: 'Bouw en infrastructuur' },
                    { id: 'Chemie en kunststoffen', label: 'Chemie en kunststoffen' },
                    { id: 'Chemische industrie', label: 'Chemische industrie' },
                    {
                        id: 'Consumentengoederen en detailhandel',
                        label: 'Consumentengoederen en detailhandel',
                    },
                    { id: 'Creatieve industrie', label: 'Creatieve industrie' },
                    { id: 'Dienstensector', label: 'Dienstensector' },
                    { id: 'Elektronica-industrie', label: 'Elektronica-industrie' },
                    { id: 'Energiesector', label: 'Energiesector' },
                ]}
                label='subsibies'
                optionsOnChange={() => { console.log('optionchanged') }} />
        );

        const element = screen.getByTestId('checkbox-filter-test');
        expect(element).toHaveClass('rvo-checkbox-filter');
    });
});
