import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInformationFreetext from './ProductInformationFreetext.jsx';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      style: {},
      currStyleId: null,
      currStyle: {},
  }
}

  componentDidMount() {
    this.getData();
    this.getStyles();
  }

  getData() {
    axios.post('/products/id', {product_id: this.props.id})
    .then(result => {
      var prodInfo = {
        name: result.data.name,
        category: result.data.category,
        default_price: result.data.default_price,
        features: result.data.features,
        slogan: result.data.slogan,
        description: result.data.description
      };
      this.setState({
        info: prodInfo,
      });
    })
  }
  getStyles() {
    axios.post('/products/styles', {product_id: this.props.id})
    .then(result => {
      console.log(result);
      result.data.results.map(style => {
        if (style['default?']) {
          this.setState({
            currStyle: style,
            currStyleId: style.style_id,
          })
        }})
      var styles = {
        results: result.data.results,
      };
      this.setState({
        style: styles,
      });
    })
  }

  render() {
    return(
  <div className="overview">
    <ProductInformation info={this.state.info} price={this.state.currStyle.original_price}/>
    <ImageGallery style={this.state.currStyle.photos}/>
    <StyleSelector style={this.state.currStyle.photos} name={this.state.currStyle}/>
    <AddToCart style={this.state.currStyle.skus}/>
    <ProductInformationFreetext slogan={this.state.info.slogan} desc={this.state.info.description} feats={this.state.info.features}/>
  </div>);
  }
}

export default Overview;
