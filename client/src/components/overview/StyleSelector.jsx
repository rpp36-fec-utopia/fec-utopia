import React from 'react';

var styles = (styles) => {
  if (styles) {
    return styles.map((style, i) => {
      return <img key={i} id="styleThumbnail" src={style.thumbnail_url} />
    })
  }
}
var StyleSelector = (props) => (
  <div className="styleSel">
    style > {props.name.name}
    <br />
    {styles(props.style)}
  </div>
);

export default StyleSelector;