import React, { Component } from 'react'

class Car extends Component {
    render () {
        return <div>
            <p>Car!</p>
            <p>{Math.round(Math.random()*100)}</p>
          </div>;
    }
}

export default Car