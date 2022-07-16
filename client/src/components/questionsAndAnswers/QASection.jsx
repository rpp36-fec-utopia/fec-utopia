import React from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';
import QuestionsModal from './QuestionsModal.jsx';

class QASection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionsModal: false
    };
    this.showQuestionsModal = this.showQuestionsModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      axios.post('/qa/questions', {
        product_id: this.props.id
      })
      .then(result => this.setState({questions: result.data.results}))
    }
  }

  showQuestionsModal() {
    this.setState({
      questionsModal: true
    })
  }

  render() {
    return (
      <div className="section" data-testid="QA-Section">
        <h4>QUESTIONS AND ANSWERS</h4>
        <input type="text" className="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <QuestionsList questions={this.state.questions}/>
        <QuestionsModal id={this.props.id} name={this.props.name} show={this.state.questionsModal}/>
        <div className="questionButtons">
          <button>More Questions</button>
          <button onClick={this.showQuestionsModal}>Add Question</button>
        </div>
      </div>
    )
  }
}

export default QASection;