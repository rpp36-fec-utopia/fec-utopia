import React from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';

class QASection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      axios.post('/qa/questions', {
        product_id: this.props.id
      })
      .then(result => this.setState({questions: result.data.results}))
    }
  }

  render() {
    return (
      <div className="section">
        <h4>QUESTIONS AND ANSWERS</h4>
        <input type="text" className="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <QuestionsList questions={this.state.questions}/>
        <div className="questionButtons">
          <button>More Questions</button>
          <button>Add Questions</button>
        </div>
      </div>
    )
  }
}

export default QASection;