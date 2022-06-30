import React from 'react';

var AddToCart = (props) => (
  // add to cart component
  // code here
  // GET /products/:product_id/styles

  <div class="cart">
    <div id="selection">
      <select>
        <option>Select Size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <select>
        <option>-</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <div id="addToCart">
      <button>Add to Cart</button>
      <button>star</button>
    </div>
  </div>
);

export default AddToCart;

// {
//   "product_id": "1",
//   "results": [
//   {
//           "style_id": 1,
//           "name": "Forest Green & Black",
//           "original_price": "140",
//           "sale_price": "0",
//           "default?": true,
//           "photos": [
//       {
//                   "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
//                   "url": "urlplaceholder/style_1_photo_number.jpg"
//               },
//       {
//                   "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
//                   "url": "urlplaceholder/style_1_photo_number.jpg"
//               }
//       // ...
//           ],
//       "skus": {
//                 "37": {
//                       "quantity": 8,
//                       "size": "XS"
//                 },
//                 "38": {
//                       "quantity": 16,
//                       "size": "S"
//                 },
//                 "39": {
//                       "quantity": 17,
//                       "size": "M"
//                 },
//           //...
//             }
//   },
// {
//       "style_id": 2,
//       "name": "Desert Brown & Tan",
//       "original_price": "140",
//       "sale_price": "0",
//       "default?": false,
//       "photos": [
//       {
//                   "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
//                   "url": "urlplaceholder/style_2_photo_number.jpg"
//       }
//     // ...
//           ],
//       "skus": {
//                 "37": {
//                       "quantity": 8,
//                       "size": "XS"
//                 },
//                 "38": {
//                       "quantity": 16,
//                       "size": "S"
//                 },
//                 "39": {
//                       "quantity": 17,
//                       "size": "M"
//                 },
//           //...
//             }
//   },
// // ...
// }