import React from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';
import QuestionsModal from './QuestionsModal.jsx';

class QASection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionsModal: false,
      moreQuestions: false,
      search: "",
    };
    this.showQuestionsModal = this.showQuestionsModal.bind(this);
    this.hideQuestionsModal = this.hideQuestionsModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.hideMoreQuestions = this.hideMoreQuestions.bind(this);
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

  hideQuestionsModal() {
    this.setState({
      questionsModal: false
    })
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  showMoreQuestions() {
    this.setState({
      moreQuestions: true
    })
  }

  hideMoreQuestions() {
    this.setState({
      moreQuestions: false
    })
  }

  render() {
    let showMoreQuestions = <button>More Questions</button>;

    if(this.state.moreQuestions === false) {
      showMoreQuestions = <button onClick={this.showMoreQuestions}>More Questions</button>;
    } else {
      showMoreQuestions = <button onClick={this.hideMoreQuestions}>Less Questions</button>
    }

    if (this.state.questions.length <= 2) {
      showMoreQuestions = <></>
    }

    let searchArray = [];
    if (this.state.search.length >= 3) {
      for (var i = 0; i < this.state.questions.length; i++) {
        if (this.state.questions[i].question_body.includes(this.state.search)) {
          searchArray.push(this.state.questions[i]);
        }
      }
      return (
      <div className="section" data-testid="QA-Section">
        <h4>QUESTIONS AND ANSWERS</h4>
        <input type="text" className="search" onChange={this.handleSearch} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <QuestionsList questions={searchArray} moreQuestions={this.state.moreQuestions}/>
        <QuestionsModal hide={this.hideQuestionsModal} id={this.props.id} name={this.props.name} show={this.state.questionsModal}/>
        <div className="questionButtons">
          <button>More Questions</button>
          <button onClick={this.showQuestionsModal}>Add Question</button>
        </div>
      </div>
      )
    } else {
      return (
        <div className="section" data-testid="QA-Section">
          <h4>QUESTIONS AND ANSWERS</h4>
          <input type="text" className="search" onChange={this.handleSearch} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
          <QuestionsList questions={this.state.questions} moreQuestions={this.state.moreQuestions}/>
          <QuestionsModal hide={this.hideQuestionsModal} id={this.props.id} name={this.props.name} show={this.state.questionsModal}/>
          <div className="questionButtons">
            {showMoreQuestions}
            <button onClick={this.showQuestionsModal}>Add Question</button>
          </div>
        </div>
      )
    }
  }
}

export default QASection;