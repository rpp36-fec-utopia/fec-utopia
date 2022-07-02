import React from 'react';

var ImageGallery = (props) => (
  // GET /products/:product_id/styles

  <div className="gallery">
    <img className="mainImg" src={props.style.results[0].photos[0].url} />
    <div>
      <img className="thumbs" src={props.style.results[0].photos[0].thumbnail_url} />
    </div>
  </div>
);

export default ImageGallery;

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