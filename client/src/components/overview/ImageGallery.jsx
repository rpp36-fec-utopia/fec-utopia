import React from 'react';
import ExpandedView from './ExpandedView.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currImg: null,
      currImgIdx: 0,
      list: [],
      fullList: [],
      modal: false,
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
        currImg: this.props.style[prevState.currImgIdx].url,
        currImgIdx: prevState.currImgIdx,
        list: arr.slice(0, 7),
        fullList: arr,
      });
    }
  }

  getThumb(link) {
    if (link) {
      return link.map((img, i) => {
        var image = img.url;
        if (!image && image !== null) {
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
    var index = this.state.fullList.map((img) => img.props.src).indexOf(clickedThumbLink);
    this.setState({
      currImg: clickedThumbLink,
      currImgIdx: index,
    }, () => {
      this.updateList();
      if (this.state.currImgIdx > 0) {
        document.getElementById('buttonPrev').style.visibility = 'visible';
      } else if (this.state.currImgIdx === 0) {
        document.getElementById('buttonPrev').style.visibility = 'hidden';
      }
      if (this.state.currImgIdx < this.state.fullList.length - 1) {
        document.getElementById('buttonNext').style.visibility = 'visible';
      } else if (this.state.currImgIdx === this.state.fullList.length - 1) {
        document.getElementById('buttonNext').style.visibility = 'hidden';
      }
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
      if (index === this.state.list.length - 1) {
        this.listScrollDown();
      }
      this.updateList();
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
      if (index === 0) {
        this.listScrollUp();
      }
      this.updateList();
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
    var start = this.state.fullList.map((img) => img.props.src).indexOf(this.state.list[0].props.src);
    this.setState({
      fullList: arr,
    }, () => {
      this.setState({
        list: this.state.fullList.slice(start, start + 7)
      })
    });
  }

  imgClick(e) {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <>
        <ExpandedView vis={this.state.modal} close={this.imgClick.bind(this)} fullList={this.state.fullList} currImg={this.state.currImg}/>
        <div className="gallery">
          <div id="thumbList">
            <button id="scrollup" style={{visibility: 'hidden'}} onClick={this.listScrollUp.bind(this)}>^</button>
            {this.state.list}
            <button id="scrolldown" onClick={this.listScrollDown.bind(this)}>v</button>
          </div>
          <div className="img">
            <button onClick={this.buttonPrev.bind(this)} style={{height: '25px', visibility: 'hidden'}} id="buttonPrev">&lt;</button>
            <img className="mainImg" id="enlarge" src={this.state.currImg} onClick={this.imgClick.bind(this)} checked/>
            <button onClick={this.buttonNext.bind(this)} style={{height: '25px'}} id="buttonNext">></button>
          </div>
        </div>
      </>
    )
  }
};

export default ImageGallery;