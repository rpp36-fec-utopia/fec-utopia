import React from 'react';
import ReactDOM from 'react-dom';
import QASection from './components/questionsAndAnswers/QASection.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'none'
    }
  }

  render() {
    return (
      <div>
        <h1>Project Atelier</h1>
        <QASection />
        <div>
          I AM STILL TESTING MERGE
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));