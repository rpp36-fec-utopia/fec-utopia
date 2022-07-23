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

    const compare = () => {
      console.log('please tell me this works')
    }


  const related = allData.map((item, i) => {
    return (
      <div key={i} className='card' >
       <img className='relImg' src={item.itemStyles[0].photos[0].thumbnail_url} onClick={() => changeProduct(item.itemData.id, item.itemData.name)}></img>
         <p className='category' onClick={() => changeProduct(item.itemData.id, item.itemData.name)}>{item.itemData.category}</p>
         <p className='prodName' onClick={() => changeProduct(item.itemData.id, item.itemData.name)}>{item.itemData.name}</p>
         <p className='prodPrice' onClick={() => changeProduct(item.itemData.id, item.itemData.name)}>{item.itemData.default_price}</p>
         <div className='rating'>★★★★★</div>
         <button onClick={compare} className='comp-btn'>Compare</button>
      </div>
    )
  })

  return (
    <div className='relItems'>{related}</div>
  )
}


export default RelatedItems;