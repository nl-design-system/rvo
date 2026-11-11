/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { render, screen } from '@testing-library/react';
import { Footer } from '../src/Footer';
import { describe, it, expect } from 'vitest';

describe('Footer', () => {
    it('only with secondary menu', () => {
        render(
            <Footer
                data-testid="footer-test"
                maxWidth="md"
                secondaryMenu={[
                    { content: 'Contact', link: 'https://www.rvo.nl/onderwerpen/contact' },
                    { content: 'Privacy', link: 'https://www.rvo.nl/onderwerpen/privacy' },
                    { content: 'Cookies en anti-spam', link: 'https://www.rvo.nl/onderwerpen/cookies' },
                    { content: 'Toegankelijkheid', link: '/rvo/docs/toegankelijkheidsverklaring' },
                    { content: 'Proclaimer', link: 'https://www.rvo.nl/onderwerpen/proclaimer' },
                    { content: 'Kwetsbaarheid op website', link: 'https://www.rvo.nl/onderwerpen/kwetsbaarheid' },
                ]}
            />
        );

        const element = screen.getByTestId('footer-test');
        expect(element).toHaveClass('rvo-footer');
    });
});
