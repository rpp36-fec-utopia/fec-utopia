import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Outfit from './Outfit.jsx';
import axios from 'axios';
import Comparison from './Comparison.jsx'

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
        <h2 className='relatedHeader'>Related Products</h2>

        <RelatedItems
        items={this.props.products}
        id={this.props.currentProductID}
        relIds={this.state.relatedIds}
        changeProduct={this.props.changeProduct}/>

        </div>
        <div className='currOutfit'>
        <h2 className='relatedHeader'>Your Outfit</h2>

        <Outfit
        starClicked={this.props.starClicked}
        currId={this.props.currId}
        currName={this.props.currName}
        starClick={this.props.starClick.bind(this)}
        />

        {/* <Comparison /> */}

        </div>
      </div>
    )
  }
}


export default RelatedProducts;