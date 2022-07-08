import React from 'react';

var getFeats = (feats) => {
  if (feats) {
    return feats.map((feature, i) => <li key={i}>{feature.feature}: {feature.value}</li>)
  } else {
    return;
  }
}
var ProductInformationFreetext = (props) => (
  <div className="freeFormText">
    <h4>{props.slogan}</h4>
    <p>{props.desc}</p>
    <ul>
      {getFeats(props.feats)}
    </ul>
  </div>
);

export default ProductInformationFreetext;