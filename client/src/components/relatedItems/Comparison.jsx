import React from 'react'
import { useState } from 'react'
import axios from 'axios'

// class Comparison extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       features: {},
//       currProdFeatures: []
//     }
//   }


//   render() {
    // return (
    //   <div className='modal-container'>
    //     <h4>Comparing</h4>
    //     <button>Close me!</button>
    //   </div>
    // )
//   }
// }

const Comparison = ({closeModal, itemData, name, currName, currFeat}) => {





  return (
    <div id='modal-container'>
      <h4>Comparing</h4>
      <button onClick={closeModal}>Close me!</button>
    </div>
  )
}

export default Comparison;