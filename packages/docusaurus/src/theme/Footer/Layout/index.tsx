import { Footer } from '@nl-rvo/components';

export default function FooterLayout(): JSX.Element {
  return (
    <Footer
      maxWidth="md"
      secondaryMenu={[
        { content: 'Contact', link: 'https://www.rvo.nl/onderwerpen/contact' },
        { content: 'Privacy', link: 'https://www.rvo.nl/onderwerpen/privacy' },
        { content: 'Cookies en anti-spam', link: 'https://www.rvo.nl/onderwerpen/cookies' },
        { content: 'Toegankelijkheid', link: '#' },
        { content: 'Proclaimer', link: 'https://www.rvo.nl/onderwerpen/proclaimer' },
        { content: 'Kwetsbaarheid op website', link: 'https://www.rvo.nl/onderwerpen/kwetsbaarheid' },
      ]}
      payOff=""
    />
  );
}
