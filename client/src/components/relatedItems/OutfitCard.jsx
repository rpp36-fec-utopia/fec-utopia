import React from 'react';

const OutfitCard = ({outfit}) => {
  console.log('these are the outfits', outfit)

  let outfitArray = outfit;

  const outfits = outfitArray.map((item, i) => {
    return (
      <div key={i} className='card'>
        <img className='relImg' src={item.styles.results[0].photos[0].thumbnail_url}></img>
        <p className='category'>{item.data.category}</p>
        <p className='prodName'>{item.data.name}</p>
        <p className='prodPrice'>{item.data.default_price}</p>
        <p className='rating'>★★★★★</p>
      </div>
    )
  })

  return (
    <div className='relItems'>{outfits}</div>
  )
}

export default OutfitCard