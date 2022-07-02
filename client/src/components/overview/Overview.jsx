import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInformationFreetext from './ProductInformationFreetext.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      style: [],
      slogan: 'Slogan',
      description: '',
      features: [],
    };
  }

  render() {
    return(
  <div className="overview">
    <ProductInformation info={this.state.info}/>
    <ImageGallery />
    <StyleSelector />
    <AddToCart />
    <ProductInformationFreetext slogan={this.state.slogan} desc={this.state.description} feats={this.state.features}/>
  </div>);
  }
}

export default Overview;
