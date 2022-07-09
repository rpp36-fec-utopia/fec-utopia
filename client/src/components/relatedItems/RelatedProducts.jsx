import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Outfit from './Outfit.jsx';
import axios from 'axios';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedIds: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getRelItems()
    }
  }

  getRelItems() {
    axios.post(`/products/related`, {product_id: this.props.id})
    .then(result => this.setState({
     relatedIds: result
    }))
    .catch(err => console.log('there was an error getting the related ids', err))
  }


  render () {
    return (
      <div className='related'>
        <div className='relSection'>
        <h4>Related Products</h4>
        <RelatedItems items={this.props.products} id={this.props.currentProductID} relIds={this.state.relatedIds}/>
        </div>
        <div className='currOutfit'>
        <h4>Your Outfit</h4>
        <Outfit />
        </div>
      </div>
    )
  }
}


export default RelatedProducts;