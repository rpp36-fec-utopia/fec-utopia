import React from 'react';
import axios from 'axios';
import AnswersModal from './AnswersModal.jsx';

class HelpfulAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: 0,
      answersModal: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.incrementHelpful = this.incrementHelpful.bind(this);
    this.showAnswersModal = this.showAnswersModal.bind(this);
    this.hideAnswersModal = this.hideAnswersModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      helpful: this.props.helpful
    })
  }

  handleClick() {
    axios.post('/qa/questions/helpful', {
      question_id: this.props.id,
    })
    .then(result => console.log('HELPFUL QUESTION'))
    .then(this.incrementHelpful)
  }

  incrementHelpful() {
    this.setState({
      helpful: this.state.helpful + 1
    })
  }

  showAnswersModal() {
    this.setState({
      answersModal: true
    })
  }

  hideAnswersModal() {
    this.setState({
      answersModal: false
    })
  }

  render() {
    return(
      <>
      <AnswersModal hide={this.hideAnswersModal} id={this.props.id} show={this.state.answersModal}/>
      <div className="helpfulAnswer">
        <button onClick={this.handleClick} className="button">Helpful ({this.state.helpful})</button>
        <div>|</div>
        <button onClick={this.showAnswersModal} className="button">Add Answer</button>
      </div>
      </>
    )
  }
}

export default HelpfulAnswer;