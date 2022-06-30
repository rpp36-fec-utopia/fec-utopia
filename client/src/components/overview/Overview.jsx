import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';

var Overview = (props) => (
  <div class="overview">
    <ProductInformation />
    <ImageGallery />
    <StyleSelector />
    <AddToCart />
  </div>
);

export default Overview;
