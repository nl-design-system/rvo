/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { MenuBar } from '../src/Menubar';
import { describe, it, expect } from 'vitest';

describe('Menubar', () => {
    it('Base Component', () => {
        render(
            <MenuBar
                data-testid="menu-test"
                items={[
                    { label: 'Home', link: '#' },
                    {
                        label: 'Onderwerpen',
                        link: '#',
                        submenu: [
                            {
                                label: 'Klimaat & energie',
                                link: '#',
                                icon: 'milieu',
                            },
                            {
                                label: 'Landbouw',
                                link: '#',
                                icon: 'koe-met-tekst-co2',
                            },
                            {
                                label: 'Ondernemen & Bedrijfsvoering',
                                link: '#',
                                icon: 'ondernemingsklimaat',
                            },
                            {
                                label: 'Bouwen & Wonen',
                                link: '#',
                                icon: 'grootstedelijk',
                            },
                            {
                                label: 'Visserij',
                                link: '#',
                                icon: 'vis',
                            },
                            {
                                label: 'Gezondheid, Zorg & Welzijn',
                                link: '#',
                                icon: 'hart-tussen-2-uitgestoken-handen',
                            },
                            {
                                label: 'Dier & Natuur',
                                link: '#',
                                icon: 'eend-zwemmend-bij-riet',
                            },
                        ],
                    },
                    {
                        label: 'Subsidies en financiering',
                        link: '#',
                        submenu: [
                            { label: 'Subsidies', link: '#' },
                            { label: 'Financiering', link: '#' },
                        ],
                    },
                    { label: 'Zoeken', link: '#', align: 'right' as const },
                    { label: 'Uitloggen', link: '#', align: 'right' as const },
                ]}
            />
        );

        const element = screen.getByTestId('menu-test');
        expect(element).toHaveClass('rvo-menubar');
    });
});
