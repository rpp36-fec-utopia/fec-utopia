import React from 'react';

var styles = (styles) => {
  if (styles) {
    return styles.map(style => {
      return <img id="styleThumbnail" src={style.thumbnail_url} />
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