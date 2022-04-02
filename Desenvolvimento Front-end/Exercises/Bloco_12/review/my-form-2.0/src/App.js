import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this)
    this.cantStartWithNumber = this.cantStartWithNumber.bind(this)

    this.state = {
      address: '',
      city: ''
    }
  }

  handleState({ target }) {
    const { name, value } = target
    if (name === 'address') {
      this.setState({
        address: value.replace(/[!?@#$%&*()=+|/_<>:;]/g, "")
      })
    }
    else {
      this.setState({
        [name]: value
      })
    }
  }

  cantStartWithNumber({ target }) {
    const { value } = target
    if (/\d/.test(value)) {
      this.setState({
        city: ''
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

        <label>
        Cidade: 
          <input
            type="text"
            name="city"
            maxLength="28"
            onChange={(value) => this.handleState(value)}
            onBlur={(a) => this.cantStartWithNumber(a)}
            value={this.state.city}
            required
          />
        </label>
      </fieldset>
    )
  }
}
