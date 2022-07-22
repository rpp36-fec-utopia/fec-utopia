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
      currStyleIndex: null,
      ratings: [],
  }
  this.styleClick.bind(this);
}

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getData();
      this.getStyles();
    }
  }
  getData() {
    axios({
      method: 'get',
      baseUrl: 'localhost:3000',
      url: '/products/id',
      params: {id: this.props.id},
    }).then(result => {
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
    }).then((result) => {
      axios({
        method: 'get',
        baseUrl: 'localhost:3000',
        url: '/reviews/star',
        params: {product_id: this.props.id},
      }).then((result) => {
        this.setState({
          ratings: result.data.ratings,
        })
      })
    })
  }
  getStyles() {
    axios.post('/products/styles', {product_id: this.props.id})
    .then(result => {
      console.log(result);
      result.data.results.map((style, i) => {
        if (style['default?']) {
          this.setState({
            currStyle: style,
            currStyleId: style.style_id,
            currStyleIndex: i,
          });
        }})
      var styles = {
        results: result.data.results,
      };
      this.setState({
        style: styles,
      });
    })
  }

  styleClick(e, i) {
    var style = this.state.style.results.find(res => res.style_id === e);
    this.setState({
      currStyleId: e,
      currStyle: style,
      currStyleIndex: i,
    });
  }

  render() {
    return(
  <div className="overview">
    <ProductInformation info={this.state.info} price={this.state.currStyle.original_price} sale={this.state.currStyle.sale_price} ratings={this.state.ratings}/>
    <ImageGallery style={this.state.currStyle.photos} id={this.state.currStyleId}/>
    <StyleSelector style={this.state.style.results} name={this.state.currStyle} onClick={this.styleClick.bind(this)} currStyleIndex={this.state.currStyleIndex}/>
    <AddToCart style={this.state.currStyle.skus} starClicked={this.props.starClicked} starClick={this.props.starClick}/>
    <ProductInformationFreetext slogan={this.state.info.slogan} desc={this.state.info.description} feats={this.state.info.features}/>
  </div>);
  }
}

export default Overview;

// highlight selected thumbnail
// box-shadow: 0px 5px