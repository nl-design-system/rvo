import AccordionItem from '../accordion-item/template';
import { defaultArgs } from '../defaultArgs';
import Accordion from '../template';

export default (
  <Accordion uxpId="accordion" {...defaultArgs}>
    <AccordionItem uxpId="accordionItem1" title="Item 1" teaser="Teaser">
      Content
    </AccordionItem>
    <AccordionItem uxpId="accordionItem2" title="Item 2" teaser="Teaser">
      Content
    </AccordionItem>
    <AccordionItem uxpId="accordionItem3" title="Item 3" teaser="Teaser">
      Content
    </AccordionItem>
  </Accordion>
);
