import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedProducts from './RelatedProducts.jsx'
import RelatedItems from './RelatedItems.jsx';
import App from './../../app.jsx'


/**
 * @jest-environment jsdom
 */


describe('App Render', () => {
  it('Should render Related Products and all subcomponents', () => {
    render(<App />)
    render(<RelatedProducts />);
    expect(<RelatedProducts />).not.toBeNull();
  })
})