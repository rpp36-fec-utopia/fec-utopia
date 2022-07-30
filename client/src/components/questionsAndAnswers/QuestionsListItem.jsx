import React from 'react';
import AnswersListItem from './AnswersListItem.jsx';
import HelpfulAnswer from './HelpfulAnswer.jsx';

class QuestionsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreAnswers: false
    };
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.hideMoreAnswers = this.hideMoreAnswers.bind(this);
  }

  showMoreAnswers() {
    this.setState({
      moreAnswers: true
    })
  }

  hideMoreAnswers() {
    this.setState({
      moreAnswers: false
    })
  }

  render() {

    let showMoreAnswers = <button>More Answers</button>;

    if(this.state.moreAnswers === false) {
      showMoreAnswers = <button onClick={this.showMoreAnswers}>More Answers</button>;
    } else {
      showMoreAnswers = <button onClick={this.hideMoreAnswers}>Less Answers</button>
    }

    let answerListKeys = Object.keys(this.props.question.answers);
    let starterAnswers = [answerListKeys[0], answerListKeys[1]];

    if (answerListKeys.length <= 2) {
      showMoreAnswers = <></>
    }

    if (starterAnswers[0] && this.state.moreAnswers === false) {
      return (
        <div className="question">
          <div className="qa">
            <p>Q: {this.props.question.question_body}</p>
            {starterAnswers.map((ans, i) => <AnswersListItem ans={ans} answers={this.props.question.answers} i={i} key={i}/>)}
            {showMoreAnswers}
          </div>
          <HelpfulAnswer id={this.props.question.question_id} helpful={this.props.question.question_helpfulness}/>
        </div>
        )
    } else {
      return(
        <div className="question">
          <div className="qa">
            <p>Q: {this.props.question.question_body}</p>
            {Object.keys(this.props.question.answers).map((ans, i) => <AnswersListItem ans={ans} answers={this.props.question.answers} i={i} key={i}/>)}
            {showMoreAnswers}
          </div>
          <HelpfulAnswer id={this.props.question.question_id} helpful={this.props.question.question_helpfulness}/>
        </div>
        )
    }
  }
}

export default QuestionsListItem;