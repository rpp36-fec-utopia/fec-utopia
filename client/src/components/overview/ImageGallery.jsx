import React from 'react';

var getImg = (link) => {
  if (link) {
    return link[0].url;
  }
}
var getThumb = (link) => {
  if (link) {
    return link.map((img, i) => <img key={i} className="thumbs" src={img.thumbnail_url} />)
  }
}
var ImageGallery = (props) => (
  <div className="gallery">
    <div>
      <button>^</button>
      {getThumb(props.style)}
      <button>v</button>
    </div>
    <div className="img">
      <button style={{height: '25px'}}>&lt;</button>
      <img className="mainImg" src={getImg(props.style)} />
      <button style={{height: '25px'}}>></button>
    </div>
  </div>
);

export default ImageGallery;

// change to class comp for main img state