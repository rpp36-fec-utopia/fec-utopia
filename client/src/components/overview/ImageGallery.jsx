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
    this.listScrollDown.bind(this);
    this.listScrollUp.bind(this);
    this.imgClick.bind(this);
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
    var index = this.state.fullList.map((img) => img.props.src).indexOf(e.target.src);
    this.setState({
      currImg: clickedThumbLink,
      currImgIdx: index,
    }, () => {
      this.updateList();
    });
  }
  buttonNext() {
    var newIndex = this.state.currImgIdx + 1;
    var index = this.state.list.map((img) => img.props.src).indexOf(this.state.currImg);
    if (newIndex > this.state.fullList.length - 1) {
      return;
    }
    if (newIndex > 0) {
      document.getElementById('buttonPrev').style.visibility = 'visible'
    }
    if (newIndex === this.state.fullList.length - 1) {
      document.getElementById('buttonNext').style.visibility = 'hidden';
    }
    var newImg = this.state.fullList[newIndex].props.src;
    this.setState({
      currImgIdx: newIndex,
      currImg: newImg,
    }, () => {
      this.updateList();
      if (index === this.state.list.length - 1) {
        this.listScrollDown();
      }
    });
  }
  buttonPrev() {
    var newIndex = this.state.currImgIdx - 1;
    var index = this.state.list.map((img) => img.props.src).indexOf(this.state.currImg);
    if (newIndex < 0) {
      return;
    }
    if (newIndex < this.state.fullList.length - 1) {
      document.getElementById('buttonNext').style.visibility = 'visible';
    }
    if (newIndex === 0) {
      document.getElementById('buttonPrev').style.visibility = 'hidden';
    }
    var newImg = this.state.fullList[newIndex].props.src;
    this.setState({
      currImgIdx: newIndex,
      currImg: newImg,
    }, () => {
      this.updateList();
      if (index === 0) {
        this.listScrollUp();
      }
    });
  }
  listScrollUp() {
    var start = this.state.list[0].props.src;
    var index = this.state.fullList.map((img) => img.props.src).indexOf(start);
    index -= 7;
    var end = index + 7;
    if (index < 0) {
      return;
    }
    if (index === 0) {
      document.getElementById('scrollup').style.visibility = 'hidden';

    }
    this.setState({
      list: this.state.fullList.slice(index, end)
    });
  }
  listScrollDown() {
    var start = this.state.list[0].props.src;
    var index = this.state.fullList.map((img) => img.props.src).indexOf(start);
    index += 7;
    var end = index + 7;
    if (index > this.state.fullList.length - 1) {
      return;
    }
    if (index > 0) {
      document.getElementById('scrollup').style.visibility = 'visible';
    }
    this.setState({
      list: this.state.fullList.slice(index, end)
    });
  }
  updateList() {
    var arr = this.getThumb(this.state.fullList);
    this.setState({
      fullList: arr,
    });
  }
  imgClick(e) {
    if (e.target.checked) {
      document.getElementById('enlarge').style.zoom = '250%';
      e.target.checked = !e.target.checked;
    } else {
      document.getElementById('enlarge').style.zoom = 'normal';
      e.target.checked = !e.target.checked;
    }
  }

  render() {
    return (
      <div className="gallery">
        <div>
          <button id="scrollup" style={{visibility: 'hidden'}} onClick={this.listScrollUp.bind(this)}>^</button>
          {this.state.list}
          <button id="scrolldown" onClick={this.listScrollDown.bind(this)}>v</button>
        </div>
        <div className="img">
          <button onClick={this.buttonPrev.bind(this)} style={{height: '25px', visibility: 'hidden'}} id="buttonPrev">&lt;</button>
          <img className="mainImg" id="enlarge" src={this.state.currImg} onClick={this.imgClick.bind(this)} checked/>
          <button onClick={this.buttonNext.bind(this)} style={{height: '25px'}} id="buttonNext">></button>
        </div>
      </div>)
  }
};

export default ImageGallery;