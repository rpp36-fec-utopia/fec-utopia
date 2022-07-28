import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa'

var styles = (styles, onClick, index) => {
  if (styles) {
    return styles.map((style, i) => {
      //           TEMPLATES              //
      var brFaImg = <React.Fragment key={i}><br/><FaRegCheckCircle style={{position: 'absolute', zIndex: '90', background: 'green', borderRadius: '50%'}}/><img className="styleThumbnail" src={style.photos[0].thumbnail_url} onClick={() => onClick(style.style_id, i)}/></React.Fragment>;

      var faImg = <React.Fragment key={i}><FaRegCheckCircle style={{position: 'absolute', zIndex: '90', background: 'green', borderRadius: '50%'}}/><img  className="styleThumbnail" src={style.photos[0].thumbnail_url} onClick={() => onClick(style.style_id, i)}/></React.Fragment>;

      var brImg = <React.Fragment key={i}><br/><img className="styleThumbnail" src={style.photos[0].thumbnail_url} onClick={() => onClick(style.style_id, i)}/></React.Fragment>;

      var img = <img key={i} className="styleThumbnail" src={style.photos[0].thumbnail_url} onClick={() => onClick(style.style_id, i)}/>;
      //           TEMPLATES              //

      return (i === index) ? (i % 4 === 0) ? brFaImg : faImg : (i % 4 === 0) ? brImg : img;
    })
  }
}
var StyleSelector = (props) => (
  <div className="styleSel">
    <h4>Style > {props.name.name}</h4>
    <>
      {styles(props.style, props.onClick, props.currStyleIndex)}
    </>
  </div>
);

export default StyleSelector;