import React from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';

class QASection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {}
    };
  }

  componentDidMount() {
    // console.log(this.props)
    axios.post('/qa/questions', {
      product_id: 71697
    })
    .then(result => console.log(result))
  }

  render() {
    return (
      <div class="section">
        <h4>QUESTIONS AND ANSWERS</h4>
        <input type="text" class="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <QuestionsList />
        <div class="questionButtons">
          <button>More Questions</button>
          <button>Add Questions</button>
        </div>
      </div>
    )
  }
}

export default QASection;