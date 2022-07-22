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
    }
  }

  sizeOptions(ops) {
    if (ops) {
      var sizes = Object.values(ops).map((item, i) => {
        return <option key={i}>{item.size}</option>
      });
      if (sizes.length > 0) {
        return sizes;
      } else {
        return 'OUT OF STOCK';
      }
    }
  }
  quantOptions(ops, size) {
    if (size && size !== 'Select Size') {
      document.getElementById('defaultQuant').removeAttribute('disabled');
      var item = Object.values(ops).find(item => item.size === size);
      var arr = [];
      for (var i = 1; i <= item.quantity && i <= 15; i++) {
        arr.push(<option key={i}>{i}</option>);
      }
      return arr;
    } else if (size === 'Select Size') {
      document.getElementById('defaultQuant').setAttribute('disabled', '');
    }
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
    if (e.target.id === 'size' && e.target.value === 'Select Size') {
      this.setState({
        // size: null,
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