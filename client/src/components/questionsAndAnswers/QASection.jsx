import React from 'react';
import QuestionsList from './QuestionsList.jsx'

class QASection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="qaSection">
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