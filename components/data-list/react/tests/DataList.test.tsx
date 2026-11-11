/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { DataList } from '../src/DataList';
import { describe, it, expect } from 'vitest';

describe('DataList', () => {
    it('Render with 3 items', () => {
        render(
            <DataList data-testid="data-list-test">
                <DataList.Item label="Voornaam" value="Mees" />
                <DataList.Item label="Achternaam" value="de Vos" />
                <DataList.Item
                    label="Adres"
                    value={
                        <>
                            Tweede Kamer der Staten-Generaal
                            <br />
                            Postbus 20018
                            <br />
                            2500 EA Den Haag
                        </>
                    }
                />
            </DataList>);

        const element = screen.getByTestId('data-list-test');
        expect(element).toHaveClass('rvo-data-list');
    });
});
