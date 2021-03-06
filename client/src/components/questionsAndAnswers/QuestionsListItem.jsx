import React from 'react';
import AnswersListItem from './AnswersListItem.jsx';
import HelpfulAnswer from './HelpfulAnswer.jsx';

class QuestionsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    <div className="question">
      <div className="qa">
        <p>Q: {this.props.question.question_body}</p>
        {Object.keys(this.props.question.answers).map((ans, i) => <AnswersListItem ans={ans} answers={this.props.question.answers} i={i} key={i}/>)}
       </div>
      <HelpfulAnswer id={this.props.question.question_id} helpful={this.props.question.question_helpfulness}/>
    </div>
    )
  }
}

export default QuestionsListItem;