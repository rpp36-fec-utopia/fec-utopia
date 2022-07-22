import React from 'react';

const OutfitCard = ({outfit}) => {
  console.log('these are the outfits', outfit)

  let outfitArray = outfit;

  const outfits = outfitArray.map((item, i) => {
    return (
      <div key={i} className='card'>
        {/* <img></img> */}
        <p className='category'>{item.category}</p>
        <p className='prodName'>{item.name}</p>
        <p className='prodPrice'>{item.default_price}</p>
        <p className='rating'>★★★★★</p>
      </div>
    )
  })

  return (
    <div className='relItems'>{outfits}</div>
  )
}

export default OutfitCard