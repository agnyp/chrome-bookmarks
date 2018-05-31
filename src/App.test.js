import React from 'react';
import { mount } from 'enzyme';

import ReactDOM from 'react-dom';
import App from './App';

const renderComponent = () => mount(<App />);

describe('App component', () => {
  test('renders the app', () => {
    expect(renderComponent()).toExist()
  });
});

