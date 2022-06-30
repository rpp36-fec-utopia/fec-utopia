import React from 'react';

var ProductInformation = (props) => (
  // Product Info componenet
  // code here
  // GET /products/:product_id
  <div className="prodInfo">
    <div>Display stars and review count</div>
    <div>Category here</div>
    <div>Product name here</div>
    <div>$123</div>
  </div>
);

export default ProductInformation;

// {
//   "id": 11,
//   "name": "Air Minis 250",
//   "slogan": "Full court support",
//   "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
//   "category": "Basketball Shoes",
//   "default_price": "0",
//   "features": [
//   {
//           "feature": "Sole",
//           "value": "Rubber"
//       },
//   {
//           "feature": "Material",
//           "value": "FullControlSkin"
//       },
//   // ...
//   ],
// }