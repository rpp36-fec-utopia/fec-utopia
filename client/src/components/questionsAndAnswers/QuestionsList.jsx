import React from 'react';
import QuestionsListItem from './QuestionsListItem.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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

export default QuestionsList;