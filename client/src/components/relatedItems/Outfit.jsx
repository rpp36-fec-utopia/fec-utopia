import React from 'react';

class Outfit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // here is where we will create cards for each item added to the outfit
  // will I be storing Your Outfit items within the state of this component?


  render() {
    return (
      <div className='card'>
      <p className='img'>IMG HERE</p>
      <p className='category'>Category</p>
      <p className='prodName'>Product Name</p>
      <p className='prodPrice'>$123</p>
      <p className='rating'>★★★★★</p>
      </div>
    )
  }
}

export default Outfit;