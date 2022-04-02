import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this)

    this.state = {
      address: ''
    }
  }

  handleState({ target }) {
    const { name, value } = target
    console.log(this.state.address)
    if (name === 'address') {
      this.setState({
        address: value.replace(/[!@#$%&*()=+|/]/g, "")
      })
    }
    else {
      this.setState({
        [name]: value
      })
    }

  }

  render() {
    return (
      <fieldset>
        <label>
          Nome: 
          <input
            id="name"
            type="text"
            maxLength="40"
            required
          />
        </label>

        <label>
          Email: 
          <input
            type="text"
            maxLength="50"
            required
          />
        </label>

        <label>
          CPF: 
          <input
            type="text"
            maxLength="11"
            required
          />
        </label>

        <label>
        Endereço: 
          <input
            type="text"
            name="address"
            maxLength="200"
            onChange={(value) => this.handleState(value)}
            value={this.state.address}
            required
          />
        </label>
      </fieldset>
    )
  }
}
