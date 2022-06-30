import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';

var Overview = (props) => (
  <div>
    <ProductInformation />
    <StyleSelector />
    <AddToCart />
    <ImageGallery />
  </div>
);

export default Overview;
