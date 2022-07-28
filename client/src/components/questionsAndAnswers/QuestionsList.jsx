import React from 'react';
import QuestionsListItem from './QuestionsListItem.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let starterQuestions = [this.props.questions[0], this.props.questions[1]];
    if (starterQuestions[0] && this.props.moreQuestions === false) {
      return (
        <div className="questionsList" data-testid="Questions-List">
          <h5>Questions List</h5>
          {starterQuestions.map((item, i) =>
            <QuestionsListItem question={item} key={i}/>
          )}
        </div>
      )
    } else {
      return (
        <div className="questionsList" data-testid="Questions-List">
          <h5>Questions List</h5>
          {this.props.questions.map((item, i) =>
            <QuestionsListItem question={item} key={i}/>
          )}
        </div>
      );
    }
  }
}

export default QuestionsList;