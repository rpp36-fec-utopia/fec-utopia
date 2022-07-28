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
      search: "",
    };
    this.showQuestionsModal = this.showQuestionsModal.bind(this);
    this.hideQuestionsModal = this.hideQuestionsModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  render() {
    let searchArray = [];
    if (this.state.search.length >= 3) {
      for (var i = 0; i < this.state.questions.length; i++) {
        console.log(this.state.questions[i].question_body);
        if (this.state.questions[i].question_body.includes(this.state.search)) {
          console.log('THIS WORKS');
          searchArray.push(this.state.questions[i]);
          console.log('this is searchArray:', searchArray);
        }
      }
      return (
      <div className="section" data-testid="QA-Section">
        <h4>QUESTIONS AND ANSWERS</h4>
        <input type="text" className="search" onChange={this.handleSearch} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <QuestionsList questions={searchArray}/>
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
          <QuestionsList questions={this.state.questions}/>
          <QuestionsModal hide={this.hideQuestionsModal} id={this.props.id} name={this.props.name} show={this.state.questionsModal}/>
          <div className="questionButtons">
            <button>More Questions</button>
            <button onClick={this.showQuestionsModal}>Add Question</button>
          </div>
        </div>
      )
    }
  }
}

export default QASection;