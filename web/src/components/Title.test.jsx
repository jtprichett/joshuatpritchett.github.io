import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import '../spec_helper';
import Title from './Title';

describe('Title', () => {
  it('renders Title', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('.Title')).to.exist;
  });

  it('renders Comment', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('.Comment')).to.exist;
  });

  it('Title renders the text of my nickname', () => {
    const wrapper = shallow(<Title />);
    const titleName = wrapper.find('.Title');
    expect(titleName.text()).to.have.string('jprime');
  });

  it('Title contains sub-comment for full-name', () => {
    const wrapper = shallow(<Title />);
    const fullName = wrapper.find('.Title .Comment');
    expect(fullName.text()).to.have.string('Josh Pritchett');
  });
});
