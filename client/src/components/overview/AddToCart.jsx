import React from 'react';


class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
    }
  }

  sizeOptions(ops) {
    if (ops) {
      return Object.values(ops).map((item, i) => {
        return <option key={i}>{item.size}</option>
      });
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
      size: e.target.value,
    });
  }

  render() {
    return(
      <div className="cart">
        <div id="selection">
          <select onChange={this.onChange.bind(this)}>
            <option>Select Size</option>
            {this.sizeOptions(this.props.style)}
          </select>
          <select id="defaultQuant" disabled="disabled">
            <option>-</option>
            {this.quantOptions(this.props.style, this.state.size)}
          </select>
        </div>
        <div id="addToCart">
          <button>Add to Cart</button>
          <button>star</button>
        </div>
      </div>
    )
  }
}

export default AddToCart;