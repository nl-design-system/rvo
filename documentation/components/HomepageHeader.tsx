import styled from '@emotion/styled/macro';
import clsx from 'clsx';

export default function HomepageHeader({ title, tagline }) {
  return (
    <HeroBanner className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{tagline}</p>
      </div>
    </HeroBanner>
  );
}

const HeroBanner = styled.header`
  padding-block-end: 4rem;
  padding-block-start: 4rem;
  padding-inline-end: 0;
  padding-inline-start: 0;

  @media screen and (max-width: 996px) {
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    padding-inline-end: 2rem;
    padding-inline-start: 2rem;
  }
`;
