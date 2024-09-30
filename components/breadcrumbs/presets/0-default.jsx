import BreadcrumbsItem from '../breadcrumbs-item/template';
import { defaultArgs } from '../defaultArgs';
import Breadcrumbs from '../template';

export default (
  <Breadcrumbs uxpId="breadcrumbs" {...defaultArgs}>
    <BreadcrumbsItem uxpId="breadcrumb-1" url="#">
      Breadcrumb 1
    </BreadcrumbsItem>
    <BreadcrumbsItem uxpId="breadcrumb-2" url="#">
      Breadcrumb 2
    </BreadcrumbsItem>
    <BreadcrumbsItem uxpId="breadcrumb-3">Breadcrumb 3</BreadcrumbsItem>
  </Breadcrumbs>
);
