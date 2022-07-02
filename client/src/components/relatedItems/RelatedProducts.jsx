import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Outfit from './Outfit.jsx';
import axios from 'axios';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  /*
  This is where I plan on fetching the products from the API.
  Based on whatever is being displayed in the Overview I will get items with the same category ??? how to do this ???
  I will pass those related products down to my RelatedItems component which will sort and display them
  */

  render () {
    return (
      <div class='related'>
        <div class='relItems'>
        <h4>Related Products</h4>
        <RelatedItems />
        </div>
        <div class='currOutfit'>
        <h4>Your Outfit</h4>
        <Outfit />
        </div>
      </div>
    )
  }
}

export default RelatedProducts;