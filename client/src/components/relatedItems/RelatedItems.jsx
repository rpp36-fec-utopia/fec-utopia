import React from 'react';

const RelatedItems = ({relItems}) => {
  // const related = relItems.map((item) => {
  //   return (

  //   )
  // })

  // here is where I will be creating all the cards for all the related items

  var handleClick = () => {
    console.log('the card has been clicked')
    // I will have to display a comparison modal upon the user clicking a card
  }

  return (
    <div class='card' onClick={handleClick}>
    <p class='img'>IMG HERE</p>
    <p class='category'>Category</p>
    <p class='prodName'>Product Name</p>
    <p class='prodPrice'>$123</p>
    <p class='rating'>★★★★★</p>
    </div>
  )
}

export default RelatedItems;