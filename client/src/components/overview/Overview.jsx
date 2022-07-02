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
      info: {
        "name": "Air Minis 250",
        "slogan": "Full court support",
        "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
        "category": "Basketball Shoes",
        "default_price": "0",
        "features": [
        {
                "feature": "Sole",
                "value": "Rubber"
            },
        {
                "feature": "Material",
                "value": "FullControlSkin"
            },
        ],
      },
      style: {
          "results": [
          {
                  "style_id": 1,
                  "name": "Forest Green & Black",
                  "original_price": "140",
                  "sale_price": "0",
                  "default?": true,
                  "photos": [
              {
                          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                          "url": "urlplaceholder/style_1_photo_number.jpg"
                      },
              {
                          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                          "url": "urlplaceholder/style_1_photo_number.jpg"
                      }
                  ],
              "skus": {
                        "37": {
                              "quantity": 8,
                              "size": "XS"
                        },
                        "38": {
                              "quantity": 16,
                              "size": "S"
                        },
                        "39": {
                              "quantity": 17,
                              "size": "M"
                        },
                    }
          },
        ],
      },
      currStyleId: 1,
  }
}

  render() {
    return(
  <div className="overview">
    <ProductInformation info={this.state.info} price={this.state.style.results[0].original_price}/>
    <ImageGallery style={this.state.style}/>
    <StyleSelector style={this.state.style}/>
    <AddToCart style={this.state.style}/>
    <ProductInformationFreetext slogan={this.state.info.slogan} desc={this.state.info.description} feats={this.state.info.features}/>
  </div>);
  }
}

export default Overview;
