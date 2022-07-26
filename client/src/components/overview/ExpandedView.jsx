import React from 'react';

class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      list: [],
    };
    this.itsZoominTime.bind(this);
  }

  itsZoominTime(e) {
    // zoom here
    var x = e.clientX - e.target.offsetLeft - 75;
    var y = e.clientY - e.target.offsetTop - 25;
    console.log(x, y)
  }

  render() { // props: vis, close, fullList, currImg
    if (this.props.vis) {
      return (
        <div className="modal">
          <img className="imgModal" src={this.props.currImg} onClick={this.itsZoominTime.bind(this)}></img>
          <button className="button" onClick={this.props.close}>x</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default ExpandedView;