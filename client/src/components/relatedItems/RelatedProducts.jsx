import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Outfit from './Outfit.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render () {
    return (
      <div>
        <RelatedItems />
        <Outfit />
      </div>
    )
  }
}

export default RelatedProducts;