export interface IBreadcrumbsItem {
  label: string;
  link?: string;
}

export interface IBreadcrumbProps {
  items: IBreadcrumbsItem[];
  size?: 'sm' | 'md' | 'lg';
}
