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

  componentDidUpdate(prevProps) {
    if (this.props.currId !== prevProps.currId) {
      if (JSON.parse(localStorage.getItem('ids'))) {
        let outfitIds = JSON.parse(localStorage.getItem('ids'))
        let temp = [];
        outfitIds.forEach(id => {
          axios.post('/products/id', {product_id: id})
            .then(prodInfo => {
              axios.post('/products/styles', {product_id: id})
               .then(prodStyles => {
                axios({
                  method: 'get',
                  baseUrl: 'localhost:3000',
                  url: '/reviews/star',
                  params: {product_id: id},
                }).then(stars => {
                  temp.push({
                    data: prodInfo.data,
                    styles: prodStyles.data,
                    stars: stars.data.ratings
                  })
                  this.setState({
                    outfit: temp,
                    notEmpty: true
                  })
                })
                // temp.push({
                //   data: prodInfo.data,
                //   styles: prodStyles.data
                // })
                // this.setState({
                //   outfit: temp,
                //   notEmpty: true
                // })
               })
               .catch(err => console.log('there was an error getting the styles', err))
            })
            .catch(err => console.log('there was an error getting the data', err))
        })
        // this.setState({
        //   outfit: temp,
        //   notEmpty: true
        // })
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
                axios({
                  method: 'get',
                  baseUrl: 'localhost:3000',
                  url: '/reviews/star',
                  params: {product_id: id},
                }).then(stars => {
                  temp.push({
                    data: prodInfo.data,
                    styles: prodStyles.data,
                    stars: stars.data.ratings
                  })
                  this.setState({
                    outfit: temp,
                    notEmpty: true
                  })
                })
                // temp.push({
                //   data: prodInfo.data,
                //   styles: prodStyles.data
                // })
                // this.setState({
                //   outfit: temp
                // })
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