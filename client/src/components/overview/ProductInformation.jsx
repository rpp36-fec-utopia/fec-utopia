import React from 'react';

var ProductInformation = (props) => (
  <div className="prodInfo">
    <div>★★★★★ review count</div>
    <div>{props.info.category}</div>
    <div>{props.info.name}</div>
    <div>${props.price}</div>
  </div>
);

export default ProductInformation;