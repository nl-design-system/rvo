import BreadcrumbsItem from '../breadcrumbs-item';
import { defaultArgs } from '../defaultArgs';
import Breadcrumbs from '../template';

export default (
  <Breadcrumbs uxpId="breadcrumbs" {...defaultArgs}>
    <BreadcrumbsItem uxpId="breadcrumb-1" link="#">
      Breadcrumb 1
    </BreadcrumbsItem>
    <BreadcrumbsItem uxpId="breadcrumb-2" link="#">
      Breadcrumb 2
    </BreadcrumbsItem>
    <BreadcrumbsItem uxpId="breadcrumb-3">Breadcrumb 3</BreadcrumbsItem>
  </Breadcrumbs>
);
