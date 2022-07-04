import React from 'react';
import axios from 'axios';

class AnswersListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      helpful: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.incrementHelpful = this.incrementHelpful.bind(this);
  }

  componentDidMount() {
    const date = new Date(this.props.answers[this.props.ans].date);
    this.setState({
      date: date.toLocaleDateString(),
      helpful: this.props.answers[this.props.ans].helpfulness
    })
  }

  handleClick() {
    axios.post('/qa/answers/helpful', {
      answers_id: this.props.answers[this.props.ans].id,
    })
    .then(result => console.log('SUCCESS'))
    .then(this.incrementHelpful)
  }

  incrementHelpful() {
    this.setState({
      helpful: this.state.helpful + 1
    })
  }

  render() {
    return (
      <div>
        <div>{this.props.i+1}: {this.props.answers[this.props.ans].body}</div>
        <div>
          by {this.props.answers[this.props.ans].answerer_name}, {this.state.date}
          <button onClick={this.handleClick}>Helpful ({this.state.helpful})</button>
          <button>Report</button>
        </div>
      </div>
    );
  }
}

export default AnswersListItem;