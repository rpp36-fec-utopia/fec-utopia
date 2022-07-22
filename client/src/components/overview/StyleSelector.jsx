import React from 'react';

var styles = (styles, onClick) => {
  if (styles) {
    return styles.map((style, i) => {
      return <img key={i} className="styleThumbnail" src={style.photos[0].thumbnail_url} onClick={() => onClick(style.style_id, i)}/>
    })
  }
}
var StyleSelector = (props) => (
  <div className="styleSel">
    <h4>Style > {props.name.name}</h4>
    <br />
    <>
      {styles(props.style, props.onClick)}
    </>
  </div>
);

export default StyleSelector;