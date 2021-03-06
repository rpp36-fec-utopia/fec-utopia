import React from 'react';
import axios from 'axios';
import OutfitCard from './OutfitCard.jsx'

class Outfit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outfitIds: [],
      outfit: [],
      notEmpty: false
    }
  }

  componentDidUpdate(prevProps) { // the clicked component goes back to being unclicked on page refresh
    if (this.props.currId !== prevProps.currId) {
      if (JSON.parse(localStorage.getItem('ids'))) {
        let outfitIds = JSON.parse(localStorage.getItem('ids'))
        let temp = [];
        outfitIds.forEach(id => {
          axios.post('/products/id', {product_id: id})
            .then(prodInfo => {
              axios.post('/products/styles', {product_id: id})
               .then(prodStyles => {
                temp.push({
                  data: prodInfo.data,
                  styles: prodStyles.data
                })
               })
               .catch(err => console.log('there was an error getting the styles', err))
            })
            .catch(err => console.log('there was an error getting the data', err))
        })
        this.setState({
          outfit: temp,
          notEmpty: true
        })
      }
    }
    if (this.props.starClicked !== prevProps.starClicked) {
      if (this.props.starClicked) {
        let old_data = JSON.parse(localStorage.getItem('ids')) || []
        let new_data = this.props.currId;
        old_data.push(new_data);
        localStorage.setItem('ids', JSON.stringify(old_data))
        let outfitIds = JSON.parse(localStorage.getItem('ids'))
        let temp = []
        outfitIds.forEach(id => {
          axios.post('/products/id', {product_id: id})
            .then(prodInfo => {
              axios.post('/products/styles', {product_id: id})
               .then(prodStyles => {
                temp.push({
                  data: prodInfo.data,
                  styles: prodStyles.data
                })
               })
               .catch(err => console.log('there was an error getting the styles', err))
            })
            .catch(err => console.log('there was an error getting the data', err))
        })
        this.setState({
          outfit: temp
        })
      }
    }
  }

  render() {
    const isNotEmpty = this.state.notEmpty;

    return (
      <div className='theOutfit'>
      <div className='addToOutfit' onClick={this.props.starClick}>
       <h3 className='addToHeader'>+ Add to Outfit</h3>
      </div>
      {isNotEmpty ? <OutfitCard outfit={this.state.outfit} /> : <h1>No Outfit</h1>}
      </div>
    )
  }
}

export default Outfit;