import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { ReactNode } from 'react';

interface StorybookLinkProps {
  id: string;
  children: ReactNode;
}

export default function StorybookLink({ id, children }: StorybookLinkProps) {
  const { siteConfig } = useDocusaurusContext();
  const base = (siteConfig.customFields?.storybookIframeBase as string) ?? '/rvo';
  const href = `${base}/iframe.html?id=${id}&viewMode=story`;
  return (
    <a href={href} className="rvo-link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
