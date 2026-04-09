import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BlogLayout(props) {
  const { sidebar, hiddenSidebarContainer, children, ...layoutProps } = props;

  return (
    <Layout {...layoutProps}>
      <div className={`rvo-max-width-layout rvo-max-width-layout--sm`}>
        <main
          className={clsx(
            styles.docMainContainer,
            (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
          )}
        >
          <div className="container padding-bottom--lg">
            <div className="row">
              <div className={clsx('col')}>{children}</div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
