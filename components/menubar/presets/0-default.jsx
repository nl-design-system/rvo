import { defaultArgs } from '../defaultArgs';
import MenuBarItem from '../menubar-item/template';
import MenuBar from '../template';

export default (
  <MenuBar uxpId="menuBar" {...defaultArgs}>
    <MenuBarItem uxpId="menuBarItem1" label="Home" icon="home" link="#" />
    <MenuBarItem uxpId="menuBarItem2" label="Mijn aanvragen" icon="publicatie" link="#" />
    <MenuBarItem uxpId="menuBarItem3" label="Nieuwe aanvraag" icon="plus" link="#" />
    <MenuBarItem uxpId="menuBarItem4" label="Uitloggen" icon="versleutelen" link="#" align="right" />
  </MenuBar>
);

// {
//   defaultArgs.items.map((itemProps, index) => (
//     <MenuBarItem uxpId={`menuBar-${index}`} key={index} {...itemProps} />
//   ));
// }
