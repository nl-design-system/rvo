import { Footer, FooterColumn } from '@nl-rvo/components';

export default function FooterLayout(): JSX.Element {
  return (
    <Footer maxWidth="md">
      <FooterColumn>
        <em style={{ fontWeight: 'var(--rvo-font-weight-normal)' }}>Wij helpen u graag vooruit!</em>
      </FooterColumn>
    </Footer>
  );
}
