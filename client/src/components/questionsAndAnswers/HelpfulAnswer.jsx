import React from 'react';
import axios from 'axios';

class HelpfulAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.incrementHelpful = this.incrementHelpful.bind(this);
  }

  componentDidMount() {
    this.setState({
      helpful: this.props.helpful
    })
  }

  handleClick() {
    axios.post('/qa/questions/helpful', {
      question_id: this.props.id,
    })
    .then(result => console.log('HELPFUL QUESTION'))
    .then(this.incrementHelpful)
  }

  incrementHelpful() {
    this.setState({
      helpful: this.state.helpful + 1
    })
  }

  render() {
    return(
    <div className="helpfulAnswer">
      <button onClick={this.handleClick} className="button">Helpful ({this.state.helpful})</button>
      <div>|</div>
      <button className="button">Add Answer</button>
    </div>
    )
  }
}

export default HelpfulAnswer;