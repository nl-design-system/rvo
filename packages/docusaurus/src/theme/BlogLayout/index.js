import BlogSidebar from '@theme/BlogSidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BlogLayout(props) {
  const { sidebar, children, ...layoutProps } = props;

  return (
    <Layout {...layoutProps}>
      <div className={styles.docsWrapper}>
        <div className={`${styles.docPage} rvo-max-width-layout rvo-max-width-layout--md`}>
          <BlogSidebar sidebar={sidebar} />
          <main className="docMainContainer_hjYf">
            <div className="container padding-bottom--lg">
              <div className="row">
                <div className={clsx('col')}>{children}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
