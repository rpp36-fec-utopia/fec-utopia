import React from 'react';


class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      defaultQuant: null,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.starClicked !== prevProps.starClicked) {
      this.starHeart(this.props.starClicked);
    } else if (this.props.id !== prevProps.id) {
      this.setState({
        size: null,
        defaultQuant: null,
      })
    }
  }

  sizeOptions(ops) {
    if (ops) {
      var sizes = Object.values(ops).map((item, i) => {
        return <option key={i}>{item.size}</option>
      });
      if (sizes.length > 0 && sizes[0].props.children) {
        document.getElementById('size').removeAttribute('disabled');
        return sizes;
      } else {
        document.getElementById('size').setAttribute('disabled', '');
        return [<option key='outtaStock' selected>OUT OF STOCK</option>];
      }
    }
  }
  quantOptions(ops, size) {
    if (size && size !== 'Select Size') {
      document.getElementById('defaultQuant').removeAttribute('disabled');
      var item = Object.values(ops).find(item => item.size === size);
      var arr = [];
      for (var i = 1; i <= item.quantity && i <= 15; i++) {
        if (i === 1) {
          arr.push(<option key={i} selected>{i}</option>);
        } else {
          arr.push(<option key={i}>{i}</option>);
        }
      }
      return arr;
    } else if (size === 'Select Size') {
      document.getElementById('defaultQuant').setAttribute('disabled', '');
    }
  }

  onChange(e) {
    if (e.target.id === 'size' && (this.state.size === null || this.state.size === 'Select Size')) {
      this.setState({
        defaultQuant: '1',
      });
    }
    this.setState({
      [e.target.id]: e.target.value,
    });
    if (e.target.id === 'size' && e.target.value === 'Select Size') {
      this.setState({
        defaultQuant: null,
      });
    }
  }

  addToCart() {
    if (!this.state.size) {
      alert('please select a size');
    } else if (!this.state.defaultQuant || this.state.defaultQuant === '-') {
      alert('please select a quantity')
    }
  }

  starHeart(bool) {
    if (!bool) {
      document.getElementById('save').innerHTML = '&#9734;';
    } else {
      document.getElementById('save').innerHTML = '&#9825;';
    }
  }

  render() {
    return(
      <div className="cart">
        <div id="selection">
          <select id="size" onChange={this.onChange.bind(this)}>
            <option>Select Size</option>
            {this.sizeOptions(this.props.style)}
          </select>
          <select id="defaultQuant" disabled="disabled" onChange={this.onChange.bind(this)}>
            <option>-</option>
            {this.quantOptions(this.props.style, this.state.size)}
          </select>
        </div>
        <div>
          <button className="addToCart" onClick={this.addToCart.bind(this)}>Add to Cart</button>
          <button id="save" onClick={this.props.starClick}> &#9734;</button>
        </div>
      </div>
    )
  }
}

export default AddToCart;