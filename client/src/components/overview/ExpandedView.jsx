import React from 'react';

class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      list: [],
      zoom: false,
    };
    this.itsZoominTime.bind(this);
  }

  itsZoominTime(e) {
    // zoom here
    var x = e.clientX + e.screenX + 75;
    var y = e.clientY + e.screenY + 25;
    var scaledX = x / 2.5;
    var scaledY = y / 2.5;
    var yperc = (scaledY * 100) / e.target.height;
    var xperc = (scaledX * 100) / e.target.width;
    if (!this.state.zoom) {
      document.getElementById('zoom').style.transform = `scale(2.5)`;
      document.getElementById('zoom').style.transformOrigin = `${xperc}% ${yperc}%`;
    } else {
      document.getElementById('zoom').style.transform = 'scale(1)';
    }
    this.setState({
      zoom: !this.state.zoom,
    });
  }

  render() { // props: vis, close, fullList, currImg
    if (this.props.vis) {
      return (
        <div className="modal" id="asdf">
          <img className="imgModal" id="zoom" src={this.props.currImg} onClick={this.itsZoominTime.bind(this)}></img>
          <button className="button" onClick={this.props.close}>x</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default ExpandedView;