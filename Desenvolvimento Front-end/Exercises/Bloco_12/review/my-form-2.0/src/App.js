import React, { Component } from 'react'

import './App.css'

const states = [
  { uf: 'AL', unidade_federativa: 'Alagoas' },
  { uf: 'AC', unidade_federativa: 'Acre' },
  { uf: 'AP', unidade_federativa: 'Amapá' },
  { uf: 'AM', unidade_federativa: 'Amazonas' },
  { uf: 'BA', unidade_federativa: 'Bahia' },
  { uf: 'CE', unidade_federativa: 'Ceará' },
  { uf: 'DF', unidade_federativa: 'Distrito Federal' },
  { uf: 'ES', unidade_federativa: 'Espírito Santo' },
  { uf: 'GO', unidade_federativa: 'Goías' },
  { uf: 'MA', unidade_federativa: 'Maranhão' },
  { uf: 'MT', unidade_federativa: 'Mato Grosso' },
  { uf: 'MS', unidade_federativa: 'Mato Grosso do Sul' },
  { uf: 'MG', unidade_federativa: 'Minas Gerais' },
  { uf: 'PA', unidade_federativa: 'Pará' },
  { uf: 'PB', unidade_federativa: 'Paraíba' },
  { uf: 'PR', unidade_federativa: 'Paraná' },
  { uf: 'PE', unidade_federativa: 'Pernambuco' },
  { uf: 'PI', unidade_federativa: 'Piauí' },
  { uf: 'RJ', unidade_federativa: 'Rio de Janeiro' },
  { uf: 'RN', unidade_federativa: 'Rio Grande do Norte' },
  { uf: 'RS', unidade_federativa: 'Rio Grande do Sul' },
  { uf: 'RO', unidade_federativa: 'Rondônia' },
  { uf: 'RR', unidade_federativa: 'Roraíma' },
  { uf: 'SC', unidade_federativa: 'Santa Catarina' },
  { uf: 'SP', unidade_federativa: 'São Paulo' },
  { uf: 'SE', unidade_federativa: 'Sergipe' },
  { uf: 'TO', unidade_federativa: 'Tocantins' },
  ];

export default class App extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this)
    this.cantStartWithNumber = this.cantStartWithNumber.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: ''
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
            name="name"
            maxLength="40"
            onChange={(value) => this.handleState(value)}
            required
          />
        </label>

        <label>
          Email: 
          <input
            type="text"
            name="email"
            maxLength="50"
            onChange={(value) => this.handleState(value)}
            required
          />
        </label>

        <label>
          CPF: 
          <input
            type="text"
            name="cpf"
            maxLength="11"
            onChange={(value) => this.handleState(value)}
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

        <label>
        Estado: 
          <select
            name="state"
            onChange={(value) => this.handleState(value)}
            required
          >
            {
              states.map((value, index) => (
                <option key={ index }>{ value.uf }</option>
              ))
            }
          </select>
        </label>

        <label>
          Tipo:
          <input
            type="radio"
            name="type"
            value="CASA"
            onChange={(value) => this.handleState(value)}
            required
          /> CASA

          <input
            type="radio"
            name="type"
            value="APARTAMENTO"
            onChange={(value) => this.handleState(value)}
            required
          /> APARTAMENTO
        </label>
      </fieldset>
    )
  }
}
