import React from 'react';

var getImg = (link) => {
  if (link) {
    return link[0].url;
  }
}
var getThumb = (link) => {
  if (link) {
    return link.map((img, i) => <img key={i} className="thumbs" src={link.thumbnail_url} />)
  }
}
var ImageGallery = (props) => (
  <div className="gallery">
    <img className="mainImg" src={getImg(props.style)} />
    <div>
      {getThumb(props.style)}
    </div>
  </div>
);

export default ImageGallery;