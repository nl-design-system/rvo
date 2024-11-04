// import { Footer } from '@nl-rvo/components';
import type { Props } from '@theme/Footer/Layout';

export default function FooterLayout({ links }: Props): JSX.Element {
  // const columns = links.props.links.map((linkColumn) => ({
  //   label: linkColumn.title,
  //   items: linkColumn.items.map((linkItem) => ({
  //     content: linkItem.label,
  //     link: linkItem.to,
  //   })),
  // }));
  // return <Footer columns={columns} maxWidth="md" />;
  return <div>{links}</div>;
}
