import React from 'react';

var onSale = (price, sale) => {
  if (sale) {
    return <div><b><strike>${price}</strike></b> <b style={{color:'red'}}>${sale}</b></div>
  } else {
    return <div>${price}</div>
  }
}
var ProductInformation = (props) => (
  <div className="prodInfo">
    <div>★★★★★ review count</div>
    <div><b>{props.info.category}</b></div>
    <div>{props.info.name}</div>
    {onSale(props.price, props.sale)}
  </div>
);

export default ProductInformation;