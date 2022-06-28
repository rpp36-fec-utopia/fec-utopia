import React from 'react';
import ReactDOM from 'react-dom';

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
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));