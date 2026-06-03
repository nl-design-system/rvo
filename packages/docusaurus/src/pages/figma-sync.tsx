import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactElement } from 'react';
import data from './figma-sync-data.json';

export default function FigmaSync(): ReactElement {
  return (
    <Layout title="Figma Sync" description="Componentstatus Storybook vs Figma">
      <main style={{ paddingBlockStart: 'var(--rvo-space-xl)' }}>
        <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--none rvo-layout-column rvo-layout-gap--md">
          <Heading as="h1">Figma Sync — componentstatus</Heading>
          <p>
            Automatische vergelijking tussen Storybook-renders en Figma-exports. Visuele match is leidend voor de status
            (drempel 90%).
          </p>
          <div className="rvo-table--responsive">
            <table className="rvo-table">
              <thead className="rvo-table-head">
                <tr className="rvo-table-row">
                  <th className="rvo-table-header">Component</th>
                  <th className="rvo-table-header">Laatste check</th>
                  <th className="rvo-table-header">Visueel (min)</th>
                  <th className="rvo-table-header">Status</th>
                  <th className="rvo-table-header rvo-table-header--numeric">Instanties</th>
                  <th className="rvo-table-header rvo-table-header--numeric">Inserts (jaar)</th>
                  <th className="rvo-table-header rvo-table-header--numeric">Detaches (jaar)</th>
                </tr>
              </thead>
              <tbody className="rvo-table-body">
                {data.rows.map((row) => (
                  <tr key={row.name} className="rvo-table-row">
                    <td className="rvo-table-cell">
                      {row.reportHref ? (
                        <Link className="rvo-link" href={row.reportHref}>
                          {row.name}
                        </Link>
                      ) : (
                        row.name
                      )}
                    </td>
                    <td className="rvo-table-cell">{row.lastChecked ?? '—'}</td>
                    <td className="rvo-table-cell">{row.matchPct ?? '—'}</td>
                    <td
                      className="rvo-table-cell"
                      style={{
                        color:
                          row.passed === null
                            ? undefined
                            : row.passed
                            ? 'var(--rvo-color-groen)'
                            : 'var(--rvo-color-rood)',
                        fontWeight: row.passed !== null ? 600 : undefined,
                      }}
                    >
                      {row.passed === null ? '—' : row.passed ? 'OK' : 'MISMATCH'}
                    </td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">{row.instances}</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">{row.inserts}</td>
                    <td className="rvo-table-cell rvo-table-cell--numeric">{row.detaches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr />
          <p>
            <small>Figma-cijfers zijn een export van {data.exportDate}.</small>
          </p>
          <p>
            <strong>Instanties</strong> — huidig totaal gebruik van de component in alle Figma-bestanden van het team.
          </p>
          <p>
            <strong>Inserts (jaar)</strong> — aantal keer ingevoegd in de afgelopen 12 maanden; maatstaf voor adoptie.
          </p>
          <p>
            <strong>Detaches (jaar)</strong> — aantal keer losgekoppeld van de library; hoog = component voldoet niet
            aan de behoefte.
          </p>
        </div>
      </main>
    </Layout>
  );
}
