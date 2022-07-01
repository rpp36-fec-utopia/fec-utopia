import React from 'react';
import AnswersList from './AnswersList.jsx';

const list = [1, 2, 3, 4]

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="questionsList">
        <h5>Questions List</h5>
        {this.props.questions.map((item, i) =>
          <div class="question" key={i}>
            <div class="qa">
              <div>Q: {item.question_body}</div>
              <AnswersList answers={item.answers}/>
            </div>
            <div class="helpfulAnswer">
              <button>Helpful</button>
              <button>Add Answer</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default QuestionsList;