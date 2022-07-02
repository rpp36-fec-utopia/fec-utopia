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
      <div class='card'>
      <p class='img'>IMG HERE</p>
      <p class='category'>Category</p>
      <p class='prodName'>Product Name</p>
      <p class='prodPrice'>$123</p>
      <p class='rating'>★★★★★</p>
      </div>
    )
  }
}

export default Outfit;