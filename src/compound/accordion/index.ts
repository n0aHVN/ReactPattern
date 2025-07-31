import Accordion from './Accordion';
import Item from './Item';
import Trigger from './Trigger';
import Content from './Content';

const CompoundAccordion = Object.assign(Accordion, {
  Item,
  Trigger,
  Content,
});

export default CompoundAccordion;
