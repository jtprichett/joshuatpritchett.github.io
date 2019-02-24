import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import './spec_helper';
import Application from './Application';

describe('Application', () => {
  it('renders without crashing', () => {
    const app = mount(<Application />);
    expect(app).to.exist;
    app.unmount;
  });
});
