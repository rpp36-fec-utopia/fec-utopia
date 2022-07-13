import React from 'react';
import axios from 'axios';

function QuestionsModal(props) {

  if (props.show === false) {
    return null;
  } else {
    return <form>THIS IS A FORM</form>
  }
}

export default QuestionsModal;