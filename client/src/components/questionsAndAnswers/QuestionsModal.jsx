import React from 'react';
import axios from 'axios';

class QuestionsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      name: "",
      email: ""
    };
  }

  render() {
    if (this.props.show === false) {
      return null;
    } else {
      return <div className="questionsModal">
        <h3>ASK YOUR QUESTION</h3>
        <span>about {this.props.name}</span>

        <div className="questionForm">
          <input placeholder="Your Question"></input>
          <input placeholder="Your Nickname"></input>
          <input placeholder="Your E-Mail"></input>
        </div>
        <div>
          <button>Submit Question</button>
        </div>
        </div>
    }
  }
}

export default QuestionsModal;