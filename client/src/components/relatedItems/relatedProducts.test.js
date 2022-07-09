import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedProducts from './RelatedProducts.jsx'
import RelatedItems from './RelatedItems.jsx';
import App from './../../app.jsx'


/**
 * @jest-environment jsdom
 */

// get help desk help for the test not passing

describe('should render main component', () => {
  it('Renders related products', () => {
    render(<RelatedProducts />);
    // const element = document.createElement('div');
    // expect(<RelatedProducts />).not.toBeNull();
    expect(screen.getByText(/Related Products/i)).toBeInTheDocument();
  })
})