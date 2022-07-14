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
    if (this.props.currId !== prevProps.currId) {
    axios.post(`/products/related`, {product_id: this.props.currId})
    .then(relatedIds => {
      let temp = []
      relatedIds.data.forEach(id => {
       axios.post('/products/id', {product_id: id})
        .then(relItemData => {
          axios.post('/products/styles', {product_id: id})
            .then(relItemStyle => {
              temp.push({
                relItem: relItemData,
                relItemStyles: relItemStyle
              })
              this.setState({
                relatedIds: temp
              })
            })
        })
        .catch(err => console.log('there was an error getting product info', err))
      })
    })
    .catch(err => console.log('there was an error getting the related ids', err))
  }
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