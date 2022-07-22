import React, { useState } from 'react';

const RelatedItems = ({items, id, relIds, changeProduct}) => {
  var allData = []

    relIds.forEach((item) => {
      allData.push({
        itemData: item.relItem.data,
        itemStyles: item.relItemStyles.data.results
      })
    })

    console.log('allData', allData)


  const related = allData.map((item, i) => {
    return (
      <div key={i} className='card' onClick={() => changeProduct(item.itemData.id, item.itemData.name)}>
       <img className='relImg' src={item.itemStyles[0].photos[0].thumbnail_url}></img>
         <p className='category'>{item.itemData.category}</p>
         <p className='prodName'>{item.itemData.name}</p>
         <p className='prodPrice'>{item.itemData.default_price}</p>
         <div className='rating'>★★★★★</div>
         <button className='comp-btn'>Compare</button>
      </div>
    )
  })

  return (
    <div className='relItems'>{related}</div>
  )
}


export default RelatedItems;