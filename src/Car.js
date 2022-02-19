import React, { Component } from 'react'

export default class Car extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
          <div>
              {this.props.name}
              {this.props.price}
          </div>

          <button onClick={this.props.incrementPrice}>incrementPrice</button>
          <button onClick={this.props.decrementPrice}>decrementPrice</button>
          

      </div>
      

    )
  }
}
