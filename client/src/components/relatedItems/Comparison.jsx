import React from 'react'
import { useState } from 'react'
import axios from 'axios'

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: {},
      currProdFeatures: []
    }
  }

  componentDidMount() {
    axios.post('/products/id', {product_id: this.props.id})
      .then(res => {
        this.setState({
          currProdFeatures: res.data.features
        })
      }).catch(err => console.log('err getting currProdFeatures'))
  }


  render() {
    return (
      <div className='modal-container'>
        <h4>Comparing</h4>
        <button>Close me!</button>
      </div>
    )
  }
}

export default Comparison;