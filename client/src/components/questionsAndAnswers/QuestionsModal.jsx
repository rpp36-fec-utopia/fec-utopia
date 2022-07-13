import React from 'react';
import axios from 'axios';

function QuestionsModal(props) {

  if (props.show === false) {
    return null;
  } else {
    return <form className="questionsModal">
      <h3>ASK YOUR QUESTION</h3>
      <span>about "insert item"</span>

      <div>
        <input placeholder="Your Question"></input>
        <input placeholder="Your Nickname"></input>
        <input placeholder="Your E-Mail"></input>
      </div>
      </form>
  }
}

export default QuestionsModal;