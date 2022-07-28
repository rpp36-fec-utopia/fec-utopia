import React from 'react';
import StarReview from '../helpers/StarReview.jsx';
import starAvg from '../helpers/starAvg.js';

const OutfitCard = ({outfit}) => {


  let outfitArray = outfit.slice();

  const slideRight = () => {
    console.log('clicked')
    var slider = document.getElementById('sliders')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  const slideLeft = () => {
    var slider = document.getElementById('sliders')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const outfits = outfitArray.map((item, i) => {
    return (
      <div key={i} className='card'>
        <img className='relImg' src={item.styles.results[0].photos[0].thumbnail_url}></img>
        <p className='category'>{item.data.category}</p>
        <p className='prodName'>{item.data.name}</p>
        <p className='prodPrice'>{item.data.default_price}</p>
        <StarReview rating={starAvg(item.stars)} />
      </div>
    )
  })

  return (
    <div className='relItems' >
    <button onClick={slideLeft}>&#8592;</button>
  <div className='relItems' id='sliders' >{outfits}</div>
  <button onClick={slideRight}>&#8594;</button>
  </div>
  )
}

export default OutfitCard