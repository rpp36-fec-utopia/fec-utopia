/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import App from '../client/src/app.jsx';
import StyleSelector from '../client/src/components/overview/StyleSelector.jsx';
import ProductInformation from '../client/src/components/overview/ProductInformation.jsx';
import AddToCart from '../client/src/components/overview/AddToCart.jsx';
import ProductInformationFreetext from '../client/src/components/overview/ProductInformationFreetext.jsx';
import ImageGallery from '../client/src/components/overview/ImageGallery.jsx';
import Overview from '../client/src/components/overview/Overview.jsx';
import mockData from '../sampleData/mockData.js';


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

describe('Overview component', () => {
  it('should render the overview component', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(<Overview id={1}/>, container);
    });
    expect(container).not.toBeNull();
  })
});

describe('ProductInformation component', () => {

  const prodInfo = {
    name: mockData.productInfo.name,
    category: mockData.productInfo.category,
  };

  it('should render product information with given state', () => {
    render(<ProductInformation info={prodInfo} price={mockData.productStyle.results[0].original_price} sale={mockData.productStyle.results[0].sale_price} />);

    expect(screen.getByText('Jackets', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('review count', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('Camo Onesie', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('$140.00', {exact: false})).toBeInTheDocument();
  })
});

describe('ProductInformationFreetext component', () => {
  const state = {
    features: mockData.productInfo.features,
    slogan: mockData.productInfo.slogan,
    description: mockData.productInfo.description
  };

  it('should render slogan, description, and features onto the page', () => {
    const {container} = render(<ProductInformationFreetext slogan={state.slogan} desc={state.description} feats={state.features} />);
    const freeFormText = container.getElementsByClassName('freeFormText');

    expect(freeFormText.length).toBe(1);
    expect(screen.getByText('Blend in to your crowd')).toBeInTheDocument();
  })
});

describe('AddToCart component', () => {
  beforeEach(() => {
    render(<AddToCart style={mockData.productStyle.results[0].skus}/>);
  });

  it('should have 2 dropdowns', () => {
    expect(screen.getAllByRole('combobox').length).toBe(2);
  });
  it('should have a default size of "Select Size"', () => {
    expect(screen.getByRole('option', {name: 'Select Size'})).toBeInTheDocument();;
  })
})



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