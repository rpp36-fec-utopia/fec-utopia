import React, { useState } from 'react';

const RelatedItems = ({items, id, relIds, changeProduct}) => {
  var allData = []

    relIds.forEach((item) => {
      console.log('these are the items', item.relItemStyles.data.results)
      allData.push({
        itemData: item.relItem.data,
        itemStyles: item.relItemStyles.data.results
      })
    })

    console.log('allData', allData)

    // var handleClick = (e) => {
    //   console.log('the card has been clicked')
    //   // needs to navigate to a page where the clicked product is now the featured product, may need to put this in App and pass it down

    //   // I want to lift this up to the parent component so that it can actively change the current product in the overview.
    // }


  const related = allData.map((item, i) => {
    return (
      <div key={i} className='card' onClick={() => changeProduct(item.itemData.id, item.itemData.name)}>
       <img className='relImg' src={item.itemStyles[0].photos[0].thumbnail_url}></img>
         <p className='category'>{item.itemData.category}</p>
         <p className='prodName'>{item.itemData.name}</p>
         <p className='prodPrice'>{item.itemData.default_price}</p>
         <p className='rating'>★★★★★</p>
         <button className='comp-btn'>Compare</button>
      </div>
    )
  })




  return (
    <div className='relItems'>{related}</div>
  )
}


export default RelatedItems;