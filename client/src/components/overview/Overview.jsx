import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInformationFreetext from './ProductInformationFreetext.jsx';

var Overview = (props) => (
  <div className="overview">
    <ProductInformation />
    <ImageGallery />
    <StyleSelector />
    <AddToCart />
    <ProductInformationFreetext />
  </div>
);

export default Overview;
