/// <reference types="jest" />
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "react-testing-library";

describe('<App/>', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('has a "Hello, world!"', () => {
    const { getByText } = render(<App/>);
    getByText('Hello, world!')
  });
  
});
