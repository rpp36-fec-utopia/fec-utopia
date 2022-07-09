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
    <div style={{position: 'absolute'}}>
      <button>^</button>
      {getThumb(props.style)}
      <button>v</button>
    </div>
    <div className="img">
      <button>&lt;</button>
      <img className="mainImg" src={getImg(props.style)} />
      <button>></button>
    </div>
  </div>
);

export default ImageGallery;

// change to class comp for main img state