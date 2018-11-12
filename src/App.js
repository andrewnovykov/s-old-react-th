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

  changeTitle = (newTitle) => {
    this.setState({ pageTitle: newTitle})
  }

  handleInput = (event) => {
    console.log('changed', event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {

    const cars = this.state.cars;

    const divStyle = {
      'textAlign': 'center'
    }

    return <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>
      <input type="text" onChange={this.handleInput}/>
        <button onClick={this.changeTitle.bind(this, 'None!')}>change title</button>

      {cars.map((car, index) => {
        return (
          <Car
                key={index}
                name={car.name}
                year={car.year}
                onChangeTitle={ () => { this.changeTitle( car.name) } }
         
          />
        )
      })}

        
       
      </div>;
  }
}

export default App;
