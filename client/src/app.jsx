import React from 'react';
import ReactDOM from 'react-dom';
import QASection from './components/questionsAndAnswers/QASection.jsx'
import RelatedProducts from './components/relatedItems/RelatedProducts.jsx'
import Overview from './components/overview/Overview.jsx';

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
        <Overview />
        <RelatedProducts />
        <QASection />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));