import React from 'react';

class HelpfulAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    <div class="helpfulAnswer">
      <button>Helpful ({this.props.helpful})</button>
      <button>Add Answer</button>
    </div>
    )
  }
}

export default HelpfulAnswer;