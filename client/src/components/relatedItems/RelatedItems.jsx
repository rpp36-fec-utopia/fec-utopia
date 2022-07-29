import React, { useState } from 'react';
import Comparison from './Comparison.jsx'
import StarReview from '../helpers/StarReview.jsx';
import starAvg from '../helpers/starAvg.js';

const RelatedItems = ({items, id, relIds, changeProduct, openModal, closeModal}) => {
  var allData = []

  const [modal, setModal] = useState(false)

    relIds.forEach((item) => {
      allData.push({
        itemData: item.relItem.data,
        itemStyles: item.relItemStyles.data.results,
        itemStars: item.relItemStars
      })
    })

    const slideRight = () => {
      var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft + 500
    }
    const slideLeft = () => {
      var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft - 500
    }

    const toggleModal = () => {
      setModal(!modal)
    }


  const related = allData.map((item, i) => {
    return (
      <div key={i} className='card'>
       <img placeholder='NO IMG' className='relImg' src={item.itemStyles[0].photos[0].thumbnail_url} onClick={() => changeProduct(item.itemData.id, item.itemData.name)}></img>
         <p className='category' onClick={() => changeProduct(item.itemData.id, item.itemData.name)}>{item.itemData.category}</p>
         <p className='prodName' onClick={() => changeProduct(item.itemData.id, item.itemData.name)}>{item.itemData.name}</p>
         <p className='prodPrice' onClick={() => changeProduct(item.itemData.id, item.itemData.name)}>{item.itemData.default_price}</p>
         <StarReview rating={starAvg(item.itemStars)}/>
         <button onClick={() => {
          openModal(item.itemData)
          toggleModal()
        }} className='comp-btn'>Compare</button>
      </div>
    )
  })

  return (
    <div className='relItems' >
      <button onClick={slideLeft}>&#8592;</button>
    <div className='relItems' id='slider' >{related}</div>
    <button onClick={slideRight}>&#8594;</button>
    </div>
  )
}


export default RelatedItems;