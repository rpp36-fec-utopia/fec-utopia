import React from 'react';
import StarReview from '../helpers/StarReview.jsx';
import starAvg from '../helpers/starAvg.js';

var onSale = (price, sale) => {
  if (sale) {
    return <div><b><strike>${price}</strike></b> <b style={{color:'red'}}>${sale}</b></div>
  } else {
    return <div>${price}</div>
  }
}

var ProductInformation = (props) => (
  <div className="prodInfo">
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <StarReview rating={starAvg(props.ratings)} />
      <u style={{paddingLeft: '3px', paddingTop: '1px', cursor: 'pointer'}}>reviews count</u>
    </div>
    <div><b>{props.info.category}</b></div>
    <div>{props.info.name}</div>
    {onSale(props.price, props.sale)}
  </div>
);

export default ProductInformation;