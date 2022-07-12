import React from 'react';

const RelatedItems = ({items, id, relIds}) => {
  var allData = []

    relIds.forEach((item) => {
      allData.push(item.data)
    })


  const related = allData.map((item, i) => {
    return (
      <div key={i} className='card' onClick={handleClick}>
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
    // needs to navigate to a page where the clicked product is now the featured product
  }

  return (
    <div className='relItems'>{related}</div>
  )
}


export default RelatedItems;