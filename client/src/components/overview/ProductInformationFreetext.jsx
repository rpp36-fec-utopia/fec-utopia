import React from 'react';

var ProductInformationFreetext = (props) => (
  <div className="freeFormText">
    <h4>{props.slogan}</h4>
    <p>
    Free form text that may or may not appear depending on the product information provided. should be positioned below the image gallery...{props.desc}
    </p>
    <p>{props.feats}</p>
  </div>
);

export default ProductInformationFreetext;