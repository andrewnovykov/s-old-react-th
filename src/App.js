import React, { Component } from 'react';
import './App.css';

import Car from  './Car/Car';

class App extends Component {

  state = {

    cars: [
      {
        name: 'Toyota',
        year: 2016
      },
      {
        name: 'Ford',
        year: 2018
      },
      {
        name: 'Dodge',
        year: 2014
      }

    ],
    pageTitle: 'React components'

  }

  render() {

    const cars = this.state.cars;

    const divStyle = {
      'textAlign': 'center'
    }

    return <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>
        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>;
  }
}

export default App;
