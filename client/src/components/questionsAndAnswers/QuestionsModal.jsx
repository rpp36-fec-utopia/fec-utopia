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
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({
      body: event.target.value
    })
  }

  handleChange2(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleChange3(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit() {
    axios.post('/qa/questions/add', {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      product_id: this.props.id
    })
    .then(result => console.log('QUESTION ADDED'))
    .then(this.props.hide)
  }

  render() {
    if (this.props.show === false) {
      return null;
    } else {
      return <div className="Modal">
        <div className="Modal-Content">
        <h3>ASK YOUR QUESTION</h3>
        <span>about {this.props.name}</span>

        <div className="Form">
          <input placeholder="Your Question" onChange={this.handleChange1} className="textArea"></input>
          For privacy reasons, do not use your full name or email
          <input placeholder="Your Nickname" onChange={this.handleChange2}></input>
          <input placeholder="Your E-Mail" onChange={this.handleChange3}></input>
          For authentication reasons, you will not be emailed
        </div>
        <div>
          <button onClick={this.handleSubmit}>Submit Question</button>
        </div>
        </div>
        </div>
    }
  }
}

export default QuestionsModal;