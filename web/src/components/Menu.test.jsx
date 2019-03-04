import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import '../spec_helper';
import Menu from './Menu';

describe('Menu', () => {
  it('renders Menu', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('.Menu')).to.exist;
  });

  it('contains ListGroup', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('.Menu .ListGroup')).to.exist;
  });
});
