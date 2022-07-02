import React from 'react';
import AnswersList from './AnswersList.jsx';
import HelpfulAnswer from './HelpfulAnswer.jsx';

class QuestionsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {}
    };
  }

  componentDidMount() {
    this.setState({
      answers: this.props.question.answers,
    })
  }

  render() {
    return(
    <div class="question">
      <div class="qa">
        <p>Q: {this.props.question.question_body}</p>
        <AnswersList answers={this.props.question.answers}/>
      </div>
      <HelpfulAnswer id={this.props.question.question_id} helpful={this.props.question.question_helpfulness}/>
    </div>
    )
  }
}

export default QuestionsListItem;