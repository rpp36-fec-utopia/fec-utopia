import React from 'react';

const RelatedItems = ({items}) => {

  const related = items.map((item) => {
    return (
      <div className='card' onClick={handleClick}>
      <p className='img'>IMG HERE</p>
      <p className='category'>{item.category}</p>
      <p className='prodName'>{item.name}</p>
      <p className='prodPrice'>{item.default_price}</p>
      <p className='rating'>★★★★★</p>
      </div>
    )
  })


  var handleClick = () => {
    console.log('the card has been clicked')
    // I will have to display a comparison modal upon the user clicking a card
  }

  return (
    <div className='relItems'>{related}</div>
  )
}

export default RelatedItems;