import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currImg: null,
      list: [],
    }
    this.thumbClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      var arr = this.getThumb(this.props.style);
      this.setState({
        currImg: this.props.style[0].thumbnail_url,
        list: arr,
      });
    }
  }

  getImg(link) {
    if (link) {
      return link[0].url;
    }
  }
  getThumb(link) {
    if (link) {
      return link.map((img, i) => <img key={i} className="thumbs" src={img.thumbnail_url} onClick={this.thumbClick.bind(this)} />)
    }
  }

  thumbClick(e) {
    var clickedThumbLink = e.target.src;
    this.setState({
      currImg: clickedThumbLink,
    });
  }

  render() {
    return (
      <div className="gallery">
        <div>
          <button>^</button>
          {this.state.list}
          <button>v</button>
        </div>
        <div className="img">
          <button style={{height: '25px'}}>&lt;</button>
          <img className="mainImg" src={this.state.currImg} />
          <button style={{height: '25px'}}>></button>
        </div>
      </div>)
  }
};

export default ImageGallery;

// change to class comp for main img state