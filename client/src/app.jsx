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
<<<<<<< HEAD
      currentProductID: 0
      // stared: false,
=======
      currentProductID: 0,
      currentProductName: ""
>>>>>>> origin
    }
  }

  componentDidMount() {
    axios.get('/products')
    .then(result => this.setState({
      products: result.data,
<<<<<<< HEAD
      currentProductID: result.data[2].id
    }, () => {
      // console.log(window.location.pathname)
=======
      currentProductID: result.data[2].id,
      currentProductName: result.data[2].name
>>>>>>> origin
    }))
  }

  render() {
    return (
      <div>
        <h1>Project Atelier</h1>
        <h3><b><u>Lo</u>g<u>o</u>  _________ </b>&#x1F50E;&#xFE0E;</h3>
        <p>SITE-WIDE ANNOUNCEMENT MESSAGE! &#8212; SALE / DISCOUNT <b>OFFER</b> &#8212; <u>NEW PRODUCT HIGHLIGHT</u></p>
        <Overview id={this.state.currentProductID}/>
        <RelatedProducts currId={this.state.currentProductID} products={this.state.products}/>
        <QASection id={this.state.currentProductID} name={this.state.currentProductName}/>
      </div>
    )
  }
}

// ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
export default App;