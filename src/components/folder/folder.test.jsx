import React from "react";
import { shallow } from "enzyme";
import { Folder } from "./folder";

const renderComponent = (props) => shallow(<Folder {...props} />);

describe("Folder component", () => {
  test("Component exports its name", ()=>{
    const component = renderComponent();

    expect(component).toExist();
  });

  test('component has its className', () => {
    const component = renderComponent();

    expect(component).toHaveClassName('folder');
  });

  test('additional classes are applied', () => {
    const component = renderComponent({ className: 'foo' });

    expect(component).toHaveClassName('foo');
  });

  test('renders given links', () => {
    const component = shallow(<Folder open><a href='#'>Food</a></Folder>);

    expect(component).toHaveText('Food');
  })

  test('renders given Folder', () => {
    const dummyFolder = <Folder className='inner-folder' />
    const component = renderComponent({ open: true, children: dummyFolder });

    expect(component.find('.inner-folder')).toExist();
  })

  test('renders a title', () => {
    const component = renderComponent({ title: 'FRS24' });

    expect(component).toHaveText('FRS24');
  })

  test('a closed folder shows no content', () => {
    const component = renderComponent({ open: false, children: "Link" });

    expect(component).toHaveText('');
  });

  test('a closed folder can be opened', () => {
    const component = renderComponent({ open: false, children: "Link" });

    expect(component).toHaveText('');

    component.find('.title').simulate('click');

    component.update();

    expect(component).toHaveText('Link');
  });
});



