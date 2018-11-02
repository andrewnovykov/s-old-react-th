import React, { Component } from 'react'

class Car extends Component {
    render () {

        const { name, year, children, onChangeTitle } = this.props;

        return <div>
            <p>Car name: {name}</p>
            <p>Year: {year}</p>
            <div>{children}</div>
            <button onClick={onChangeTitle}>click</button>
          </div>;
    }
}

export default Car
