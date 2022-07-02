import React from 'react';

var ProductInformationFreetext = (props) => (
  <div className="freeFormText">
    <h4>{props.slogan}</h4>
    <p>{props.desc}</p>
    {/* <p>{props.feats}</p> map thru this prop*/}
  </div>
);

export default ProductInformationFreetext;