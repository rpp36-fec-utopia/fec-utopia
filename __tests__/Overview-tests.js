/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import {cleanup, fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import App from '../client/src/app.jsx';
import StyleSelector from '../client/src/components/overview/StyleSelector.jsx';
import ProductInformation from '../client/src/components/overview/ProductInformation.jsx';


describe('App render', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('id', 'app');
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render the app', () => {
    act(() => {
      render(<App />, container);
    });
    expect(container).not.toBeNull();
  });
});

// it('Should change the style name after clicking a style', () => {
//   const {queryByLabelText, getByLabelText} = render(
//     <StyleSelector />,
//   );

//   expect(/*something here*/).to.equal(/*something*/);
//   fireEvent.click(/*click*/);
//   expect(/*something here*/).to.equal(/*something else*/);
// });

// TESTING REQUIREMENTS
// -------------------------------
// Unit Tests for server and client code using Jest
// Code Coverage reports for unit tests
// Aim for 70-80% coverage
// Aim for 1 End-to-End test for each widget