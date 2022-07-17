import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import QASection from './components/questionsAndAnswers/QASection.jsx';
import RelatedProducts from './components/relatedItems/RelatedProducts.jsx';
import Overview from './components/overview/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProductID: 0
    }
  }

  componentDidMount() {
    axios.get('/products')
    .then(result => this.setState({
      products: result.data,
      currentProductID: result.data[2].id
    }))
  }

  render() {
    return (
      <div>
        <h1>Project Atelier</h1>
        <Overview id={this.state.currentProductID}/>
        <RelatedProducts
        currId={this.state.currentProductID}
        products={this.state.products}/>
        <QASection id={this.state.currentProductID}/>
      </div>
    )
  }
}

// ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
export default App;