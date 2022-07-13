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
import ProdInfoFreeText from '../client/src/components/overview/ProductInformationFreetext.jsx';
import ImageGallery from '../client/src/components/overview/ImageGallery.jsx';
import Overview from '../client/src/components/overview/Overview.jsx';
import mockData from './mockData.js';


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

describe('ProductInformation component', () => {

  const prodInfo = {
    name: mockData.productInfo.name,
    category: mockData.productInfo.category,
    default_price: mockData.productInfo.default_price,
    features: mockData.productInfo.features,
    slogan: mockData.productInfo.slogan,
    description: mockData.productInfo.description
  };
  it('should render product information with given state', () => {
    render(<ProductInformation info={prodInfo} price={mockData.productStyle.results[0].original_price} sale={mockData.productStyle.results[0].sale_price} />);
    expect(screen.getByText('Jackets', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('review count', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('Camo Onesie', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('$140.00', {exact: false})).toBeInTheDocument();
  })
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