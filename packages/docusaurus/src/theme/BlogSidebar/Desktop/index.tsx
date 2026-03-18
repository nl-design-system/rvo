import BlogSidebarDesktop from '@theme-original/BlogSidebar/Desktop';
import React, { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import styles from './styles.module.css';

export default function BlogSidebarDesktopWrapper(props: any): ReactElement {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rootAside = wrapperRef.current?.querySelector('aside.col.col--3');
    if (rootAside) {
      rootAside.classList.remove('col', 'col--3');
    }

    const sidebarList = wrapperRef.current?.querySelector('ul');
    if (sidebarList) {
      sidebarList.className = 'menu__list rvo-layout-column rvo-layout-gap--sm';
    }
  }, [props.sidebar]);

  return (
    <aside className="theme-doc-sidebar-container">
      <div
        ref={wrapperRef}
        className={`${styles.mainWrapper} rvo-sidebar-layout__sidebar rvo-max-width-layout--md rvo-sidebar-layout__sidebar--bg`}
      >
        <BlogSidebarDesktop {...props} />
      </div>
    </aside>
  );
}
