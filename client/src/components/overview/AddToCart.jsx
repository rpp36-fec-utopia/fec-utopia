import React from 'react';

var AddToCart = (props) => (
  // GET /products/:product_id/styles

  <div className="cart">
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