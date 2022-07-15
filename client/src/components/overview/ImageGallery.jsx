import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currImg: null,
      currImgIdx: 0,
      list: [],
      fullList: [],
    }
    this.thumbClick.bind(this);
    this.buttonNext.bind(this);
    this.buttonPrev.bind(this);
    this.getThumb.bind(this);
    this.updateList.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.id !== prevProps.id) {
      var arr = this.getThumb(this.props.style);
      this.setState({
        currImg: this.props.style[prevState.currImgIdx].thumbnail_url,
        currImgIdx: prevState.currImgIdx,
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
      return link.map((img, i) => {
        var image = img.thumbnail_url;
        if (!image) {
          image = img.props.src;
        }
        if (i === this.state.currImgIdx) {
        return (<img key={i} className="thumbs" style={{boxShadow: '0px 4px black'}}  src={image} onClick={this.thumbClick.bind(this)} />);
      }
        return (<img key={i} className="thumbs" style={{boxShadow: '0px 0px black'}} src={image} onClick={this.thumbClick.bind(this)} />);
      })
    }
  }
  thumbClick(e) {
    var clickedThumbLink = e.target.src;
    var index = this.state.list.map((img) => img.props.src).indexOf(e.target.src);
    this.setState({
      currImg: clickedThumbLink,
      currImgIdx: index,
    }, () => {
      this.updateList();
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
    this.updateList();
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
    this.updateList();
  }
  listScrollUp() {
    // scroll list up
  }
  listScrollDown() {
    // scroll list down
  }
  updateList() {
    var arr = this.getThumb(this.state.list);
    this.setState({
      list: arr,
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
          <button onClick={this.buttonPrev.bind(this)} style={{height: '25px'}}>&lt;</button>
          <img className="mainImg" src={this.state.currImg} />
          <button onClick={this.buttonNext.bind(this)} style={{height: '25px'}}>></button>
        </div>
      </div>)
  }
};

export default ImageGallery;