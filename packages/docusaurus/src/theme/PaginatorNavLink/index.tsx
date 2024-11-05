// import Link from '@docusaurus/Link';
import { LayoutFlow, Link } from '@nl-rvo/components';
import type { Props } from '@theme/PaginatorNavLink';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function PaginatorNavLink(props: Props): JSX.Element {
  const { permalink, title, subLabel, isNext } = props;
  return (
    <LayoutFlow gap="0" className={clsx(isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev')}>
      {subLabel && (
        <div className={clsx('pagination-nav__sublabel', styles['pagination-nav__sublabel'])}>{subLabel}</div>
      )}
      <Link
        className={clsx(styles['pagination-nav__link'])}
        href={permalink}
        noUnderline={true}
        showIcon={isNext ? 'after' : 'before'}
        icon={isNext ? 'delta-naar-rechts' : 'delta-naar-links'}
      >
        <div className={clsx('pagination-nav__label', styles['pagination-nav__label'])}>{title}</div>
      </Link>
    </LayoutFlow>
  );
}
