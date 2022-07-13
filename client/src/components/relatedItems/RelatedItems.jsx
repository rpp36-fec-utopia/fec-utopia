import React from 'react';

const RelatedItems = ({items, id, relIds}) => {
  var allData = []

    relIds.forEach((item) => {
      console.log('these are the items', item.relItemStyles.data.results)
      allData.push({
        itemData: item.relItem.data,
        itemStyles: item.relItemStyles.data.results
      })
    })

    console.log('allData', allData)


  const related = allData.map((item, i) => {
    return (
      <div key={i} className='card' onClick={handleClick}>
       <img className='relImg' src={item.itemStyles[0].photos[0].thumbnail_url}></img>
         <p className='category'>{item.itemData.category}</p>
         <p className='prodName'>{item.itemData.name}</p>
         <p className='prodPrice'>{item.itemData.default_price}</p>
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