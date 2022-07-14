import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currImg: null,
      currImgIdx: null,
      list: [],
      fullList: [],
    }
    this.thumbClick.bind(this);
    this.buttonNext.bind(this);
    this.buttonPrev.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      var arr = this.getThumb(this.props.style);
      this.setState({
        currImg: this.props.style[0].thumbnail_url,
        currImgIdx: 0,
        list: arr.slice(0, 7),
        fullList: arr,
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
    var index = this.state.list.map((img) => img.props.src).indexOf(e.target.src);
    this.setState({
      currImg: clickedThumbLink,
      currImgIdx: index,
    });
  }
  buttonNext() {
    var newIndex = this.state.currImgIdx + 1;
    if (newIndex > this.state.list.length - 1) {
      return;
    }
    var newImg = this.state.list[newIndex].props.src;
    this.setState({
      currImgIdx: newIndex,
      currImg: newImg,
    });
  }
  buttonPrev() {
    var newIndex = this.state.currImgIdx - 1;
    if (newIndex < 0) {
      return;
    }
    var newImg = this.state.list[newIndex].props.src;
    this.setState({
      currImgIdx: newIndex,
      currImg: newImg,
    });
  }
  listScrollUp() {
    // scroll list up
  }
  listScrollDown() {
    // scroll list down
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
          <button onClick={this.buttonPrev.bind(this)} style={{height: '25px'}}>&lt;</button>
          <img className="mainImg" src={this.state.currImg} />
          <button onClick={this.buttonNext.bind(this)} style={{height: '25px'}}>></button>
        </div>
      </div>)
  }
};

export default ImageGallery;