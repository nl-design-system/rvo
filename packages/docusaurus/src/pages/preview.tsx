import { useLocation } from '@docusaurus/router';
import * as Components from '@nl-rvo/components';
import { deserialize } from '../utils/react-serialize';

export default function Preview(): JSX.Element {
  const { search } = useLocation();
  if (!search) {
    return null;
  }

  console.log(deserialize(decodeURIComponent(search.slice(1))));
  const deserializedMarkup = deserialize(decodeURIComponent(search.slice(1)), { components: Components });
  return <>{deserializedMarkup}</>;
}
