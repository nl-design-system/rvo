import { DataList } from '@nl-rvo/component-library-react';
import { ReactNode } from 'react';
import { path2css, path2token } from '../helpers';
import './styles.scss';

type TokenRow = {
  label: string;
  value: ReactNode;
};

type TokenBlockProps = {
  title: string;
  path: string[];
  visual?: ReactNode;
  rows?: TokenRow[];
  /** Heading level of the title. Use `h2` on pages without h2 sections, so no heading level is skipped. */
  headingLevel?: 'h2' | 'h3';
  /** Place the visual next to the title, or below the title. */
  visualPosition?: 'beside' | 'below';
};

export const TokenBlock = ({
  title,
  path,
  visual,
  rows = [],
  headingLevel = 'h3',
  visualPosition = 'beside',
}: TokenBlockProps) => {
  const Heading = headingLevel;
  const allRows: TokenRow[] = [
    ...rows,
    { label: 'CSS-variabele', value: path2css(path) },
    { label: 'Design token', value: path2token(path) },
  ];

  return (
    <section className="rvo-design-tokens__token">
      <div className="rvo-design-tokens__token-header">
        {visualPosition === 'beside' && visual}
        <Heading className="rvo-design-tokens__token-title">{title}</Heading>
      </div>
      {visualPosition === 'below' && visual && <div className="rvo-design-tokens__token-sample">{visual}</div>}
      <DataList>
        {allRows.map(({ label, value }) => (
          <DataList.Item key={label} label={label} value={<strong>{value}</strong>} />
        ))}
      </DataList>
    </section>
  );
};
