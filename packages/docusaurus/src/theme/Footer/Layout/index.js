import { Footer } from '@nl-rvo/components';

export default function FooterLayout({ links }) {
  const columns = links.props.links.map((linkColumn) => ({
    label: linkColumn.title,
    items: linkColumn.items.map((linkItem) => ({
      content: linkItem.label,
      link: linkItem.to,
    })),
  }));
  return <Footer columns={columns} maxWidth="md" />;
}
