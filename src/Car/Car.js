import React, { Component } from 'react'

class Car extends Component {
    render () {

        const { name, year, children } = this.props;

        return <div>
            <p>Car name: {  name }</p>
            <p>Year: {  year }</p>
            <div>{children}</div>
          </div>;
    }
}

export default Car
