import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import QASection from './components/questionsAndAnswers/QASection.jsx';
import RelatedProducts from './components/relatedItems/RelatedProducts.jsx';
import Overview from './components/overview/Overview.jsx';
import ErrorBoundary from './ErrorBoundary.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProductID: 0,
      currentProductName: "",
      starClicked: false,
    }
    this.starClick.bind(this);
    this.changeProduct = this.changeProduct.bind(this)
  }

  changeProduct(prodId, prodName) {
    this.setState({
      currentProductID: prodId,
      currentProductName: prodName
    })
  }


  componentDidMount() {
    axios.get('/products')
    .then(result => this.setState({
      products: result.data,
      currentProductID: result.data[4].id,
      currentProductName: result.data[4].name
    }))
  }

  starClick(e) {
    this.setState({
      starClicked: !this.state.starClicked,
    });
  }

  render() {
    return (
      <div>
        <h1>Project Atelier</h1>
        <h3><b><u>Lo</u>g<u>o</u>  _________ </b>&#x1F50E;&#xFE0E;</h3>
        <p>SITE-WIDE ANNOUNCEMENT MESSAGE! &#8212; SALE / DISCOUNT <b>OFFER</b> &#8212; <u>NEW PRODUCT HIGHLIGHT</u></p>
        <Overview id={this.state.currentProductID} starClicked={this.state.starClicked} starClick={this.starClick.bind(this)}/>
        <RelatedProducts currId={this.state.currentProductID} products={this.state.products}/>
        <QASection id={this.state.currentProductID} name={this.state.currentProductName}/>
        {/* </ErrorBoundary> */}
      </div>
    )
  }
}

// ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
export default App;