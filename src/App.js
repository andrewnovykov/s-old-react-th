import React, { Component } from 'react';
import './App.css';

import Car from  './Car/Car';

class App extends Component {


  render() {

    const divStyle = {
      'textAlign': 'center'
    }

    return (
      <div style={divStyle}>
        <h1>hello</h1>
        <Car name={'Ford'} year={2018}/>
        <Car name={'Toyota'} year={2017}/>
        <Car name={'Test'} year={2017}>
          <p>!!!!!!!</p>
        </Car>
      </div>
    );
  }
}

export default App;
