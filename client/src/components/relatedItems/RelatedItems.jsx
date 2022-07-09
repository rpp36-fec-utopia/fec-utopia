import React from 'react';

const RelatedItems = ({items, id, relIds}) => {


  // const relIdsArray = relIds.data;
  // const filtered = items.filter(item => relIdsArray.includes(items.id))
  // console.log('these are the filtered items', filtered)
  // console.log('these are the relIds', relIds)
  // console.log('these are the items', items)

  /*
  I should consider filtering out the non related items in the parent component
  and then passing them down as props to this component so I don't have to deal with items not being defined when trying to filter
  */




  const related = items.map((item) => {
    // console.log('this is the item', item)
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
    // needs to navigate to a page where the clicked product is now the featured product
  }

  return (
    <div className='relItems'>{related}</div>
  )
}


export default RelatedItems;