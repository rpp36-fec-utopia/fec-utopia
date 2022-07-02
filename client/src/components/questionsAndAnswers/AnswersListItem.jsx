import React from 'react';

class AnswersListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.i+1}: {this.props.answers[this.props.ans].body}
      </div>
    );
  }
}

export default AnswersListItem;