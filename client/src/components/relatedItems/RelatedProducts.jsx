import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Outfit from './Outfit.jsx';
import axios from 'axios';
import Comparison from './Comparison.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedIds: [],
      comparison: false,
      itemData: [],
      currIdFeat: []
    }
  }

  closeModal() {
    this.setState({comparison: false});
    document.getElementById('modal-container').style.visibility = 'hidden';
  }

  openModal(data) {
    if (!this.state.comparison) {
      axios.post('/products/id', {product_id: this.props.currId})
        .then(data => {
          this.setState({comparison: true, itemData: data, currIdFeat: data.data.features})
        })
      document.getElementById('modal-container').style.visibility = 'visible';
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
              axios({
                method: 'get',
                baseUrl: 'localhost:3000',
                url: '/reviews/star',
                params: {product_id: id},
              }).then(stars => {
                temp.push({
                  relItem: relItemData,
                  relItemStyles: relItemStyle,
                  relItemStars: stars.data.ratings
                })
                this.setState({
                  relatedIds: temp
                })
              })
            }).catch(err => console.log('these was an error getting the stars', err))
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

        <Comparison
        itemData={this.state.itemData.features}
        closeModal={this.closeModal.bind(this)}
        itemName={this.state.itemData.name}
        currName={this.props.currName}
        currFeat={this.state.currIdFeat}
        />


        <div className='relSection'>
        <h2 className='relatedHeader'>Related Products</h2>
        <RelatedItems
        items={this.props.products}
        id={this.props.currentProductID}
        relIds={this.state.relatedIds}
        changeProduct={this.props.changeProduct}
        openModal={this.openModal.bind(this)}
        closeModal={this.closeModal.bind(this)}
        />

        </div>

        <div className='currOutfit'>
        <h2 className='relatedHeader'>Your Outfit</h2>
        <Outfit
        starClicked={this.props.starClicked}
        currId={this.props.currId}
        currName={this.props.currName}
        starClick={this.props.starClick.bind(this)}
        />
        </div>


      </div>
    )
  }
}


export default RelatedProducts;