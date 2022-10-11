import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { DataListItem, DataListKey, DataList as DataListNL, DataListValue } from '@utrecht/component-library-react';
import '../common/style.scss';

const DataList = () => {
  return (
    <div className="rvo-nl-demo-page">
      <LayoutColumnRow size="lg">
        <main className="rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-content">
            <DataListNL appearance="rows">
              <DataListItem>
                <DataListKey>Voornaam</DataListKey>
                <DataListValue>Mees</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Achternaam</DataListKey>
                <DataListValue>de Vos</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Gereserveerde zitplaats</DataListKey>
                <DataListValue>42</DataListValue>
              </DataListItem>
            </DataListNL>
          </div>
        </main>
      </LayoutColumnRow>
    </div>
  );
};

export default DataList;
