import { Card, Grid, Heading, LayoutFlow, StatusIcon } from '@nl-rvo/components';
import { Skeleton } from '@nl-rvo/components/skeleton/src/template';
import '../../common/loading.scss';
import { useEffect, useState } from 'react';

interface IZaak {
  dienstNaam: string;
  openstellingsNaam: string;
  statusCode: 'waarschuwing' | 'foutmelding' | 'bevestiging';
  statusToelichting: string;
}

const getZaken: () => Promise<IZaak[]> = () =>
  new Promise<IZaak[]>((resolve): void => {
    setTimeout(
      () =>
        resolve([
          {
            dienstNaam: 'WBSO 2023',
            openstellingsNaam: 'Wet Bevordering Speur- en Ontwikkelingswerk',
            statusCode: 'waarschuwing',
            statusToelichting: 'Aanvullende documenten nodig',
          },
          {
            dienstNaam: 'SVVE 2023',
            openstellingsNaam: 'Subsidieregeling verduurzaming',
            statusCode: 'waarschuwing',
            statusToelichting: 'Aanvullende documenten nodig',
          },
          {
            dienstNaam: 'Gecombineerd opgave 2023',
            openstellingsNaam: 'Gemeenschappelijk Landbouwbeleid',
            statusCode: 'foutmelding',
            statusToelichting: 'Aanvraag te laat ingediend',
          },
          {
            dienstNaam: 'ISDE 2023',
            openstellingsNaam: 'Investeringssubsidie duurzame energie',
            statusCode: 'bevestiging',
            statusToelichting: 'Aanvraag goedgekeurd',
          },
        ]),
      4000,
    );
  });

interface ISkeletonCardsProps extends ISkeletonLoaderProps {
  count?: number;
}

const SkeletonCards = ({ count = 4, ...otherProps }: ISkeletonCardsProps) => (
  <LayoutFlow>
    <Grid columns="two" gap="lg">
      {Array(count)
        .fill(() => crypto.randomUUID())
        .map((key: string) => (
          <Card key={key} title="">
            <LayoutFlow gap="2xs">
              <Skeleton width="40%" height="24px" {...otherProps} />
              <Skeleton height="18px" {...otherProps} />
              <Skeleton width="60%" height="12px" {...otherProps} />
            </LayoutFlow>
          </Card>
        ))}
    </Grid>
  </LayoutFlow>
);

export interface ISkeletonLoaderProps {
  /** De gewenste animatie */
  animation?: 'shimmer' | 'pulse';
  /** De kleur van het component */
  color?:
    | 'hemelblauw'
    | 'lichtblauw'
    | 'donkerblauw'
    | 'grijs-100'
    | 'grijs-200'
    | 'grijs-300'
    | 'grijs-400'
    | 'grijs-500'
    | 'grijs-600';
  /** De duur van de animatie in `"2s"``"800ms"` */
  duration?: string;
}

const SkeletonLoader = (props: ISkeletonLoaderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [zaken, setZaken] = useState<IZaak[]>([]);

  useEffect((): void => {
    setLoading(true);
    getZaken()
      .then((zaken: IZaak[]): void => setZaken(zaken))
      .finally((): void => setLoading(false));
  }, [props]);

  return (
    <div className="rvo-demo-page rvo-loading-demopage">
      <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--xl">
        <Heading type="h1">Footer demo page</Heading>
        <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--md ">
          Dit is een experimentele demopagina om het Skeleton component te testen. Dit component is één van de kleinste
          bouwblokken in ROOS en de werking van dit component wordt daarom met behulp van een skeleton loader
          aangetoond.
        </p>

        <p>
          Gerbuik de Storybook Controls
          <svg
            viewBox="0 0 14 14"
            width="14px"
            height="14px"
            style={{ verticalAlign: 'middle', paddingInline: '0.25rem' }}
          >
            <path d="M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z"></path>
            <path
              fillRule="evenodd"
              d="M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z"
            ></path>
          </svg>
          om het gedrag van de Skeleton te wijzigen.
        </p>

        {loading ? (
          <SkeletonCards count={4} {...props} />
        ) : (
          <LayoutFlow>
            <Grid columns="two" gap="lg">
              {zaken.map((zaak: IZaak) => (
                <Card key={zaak.openstellingsNaam} title={zaak.dienstNaam}>
                  <span className="rvo-text--subtle rvo-text--sm">{zaak.openstellingsNaam}</span>
                  <LayoutFlow row={true} gap="xs">
                    {zaak.statusCode ? <StatusIcon type={zaak.statusCode} size="md" /> : undefined}
                    <div className="rvo-text--sm">{zaak.statusToelichting}</div>
                  </LayoutFlow>
                </Card>
              ))}
            </Grid>
          </LayoutFlow>
        )}
      </main>
    </div>
  );
};

export default SkeletonLoader;
