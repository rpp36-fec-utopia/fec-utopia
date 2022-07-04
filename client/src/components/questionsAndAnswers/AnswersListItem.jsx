import React from 'react';

class AnswersListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }

  componentDidMount() {
    const date = new Date(this.props.answers[this.props.ans].date);
    this.setState({
      date: date.toLocaleDateString()
    })
  }

  render() {
    return (
      <div>
        <div>{this.props.i+1}: {this.props.answers[this.props.ans].body}</div>
        <div>
          by {this.props.answers[this.props.ans].answerer_name}, {this.state.date}
          <button>Helpful</button>
          <button>Report</button>
        </div>
      </div>
    );
  }
}

export default AnswersListItem;