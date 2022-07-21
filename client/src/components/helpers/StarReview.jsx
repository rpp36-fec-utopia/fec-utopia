import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

var StarReview = (props) => {
  return (<div className="outer-star">
    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
    <div className="inner-star" style={{width: props.rating}}>
    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
    </div>
  </div>)
}

export default StarReview;