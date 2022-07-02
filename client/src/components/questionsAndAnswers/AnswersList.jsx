import React from 'react';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.answers).map((ans, i) => <div key={i}>{i+1}: {this.props.answers[ans].body}</div>)}
      </div>
    );
  }
}

export default AnswersList;