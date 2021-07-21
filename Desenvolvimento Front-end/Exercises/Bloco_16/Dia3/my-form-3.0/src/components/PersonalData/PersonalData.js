import React from 'react';

import './personalData.css';

export default class PersonalData extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      email:'',
      cpf: '',
      address: '',
      city: '',
      state: [],
      type: '',
      resum: '',
      office: '',
      describe: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.clearNumber = this.clearNumber.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.printValueState = this.printValueState.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'address') value = value.replace(/[^\dA-Z:,\- ]/gi, "");
    this.setState({
      [name]: [value],
    })
  }

  clearNumber({ target }) {
    let { name, value } = target;
    this.setState({
      [name]: value.match(/^[\d]/g) ? '' : value,
    })
  }

  mouseEnter() {
    alert('Preencha com cuidado esta informação.');
  }

  printValueState() {
    const {
            name,
            email,
            cpf,
            address,
            city,
            state,
            resum,
            office,
            describe,
          } = this.state;
    console.log(name, email, cpf, address, city, state, resum, office, describe);
  }

  render() {
    let {
          name,
          email,
          cpf,
          address,
          city,
          state,
          resum,
          office,
          describe,
        } = this.state;
    return (
    <>
    <h1>Form</h1>
    <fieldset id="data-field">
      <label>
        Nome:
        <input
          type="text"
          maxLength="40"
          id="name-input"
          name="name"
          value={ name }
          onChange={ this.handleChange }
          required
        />
      </label>

      <label>
        E-mail:
        <input
          type="text"
          maxLength="50"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          required
        />
      </label>

      <label>
        CPF:
        <input
          type="text"
          maxLength="11"
          name="cpf"
          value={ cpf }
          onChange={ this.handleChange }
          required
        />
      </label>

      <label>
        Endereço:
        <input
          type="text"
          maxLength="200"
          name="address"
          value={ address }
          onChange={ this.handleChange }
          required  
        />
      </label>

      <label>
        Cidade:
        <input
          type="text"
          maxLength="28"
          name="city"
          value={ city }
          onChange={ this.clearNumber }
          required
        />
      </label>

      <label>
        Estado:
        <input
          type="text"
          name="state"
          value={ state }
          onChange={ this.handleChange }
          required
        />
      </label>
      <label>Residência:</label>
      <label>
        Casa
        <input
          type="radio"
          maxLength="40"
          name="type"
          value="casa"
          onChange={ this.handleChange }
          required
        />
      </label>

      <label>
        Apartamento
        <input
          type="radio"
          maxLength="40"
          name="type"
          value="apartamento"
          onChange={ this.handleChange }
          required
        />
      </label>
    </fieldset>
    
    <fieldset id="curriculum-field">
      <label>
      Resumo do currículo:
      <br></br>
        <textarea
          type="text"
          maxLength="1000"
          rows="20"
          cols="104"
          name="resum"
          value={ resum }
          onChange={ this.handleChange }
          required
        ></textarea>
      </label>
      <br></br>

      <label>
      Cargo:
      <br></br>
        <textarea
          type="text"
          maxLength="40"
          rows="3"
          cols="20"
          name="office"
          value={ office }
          onChange={ this.handleChange }
          onMouseEnter={ this.mouseEnter }
          required
        ></textarea>
      </label>
      <br></br>

      <label>
      Descrição do Cargo:
      <br></br>
        <textarea
          type="text"
          maxLength="500"
          rows="10"
          cols="64"
          name="describe"
          value={ describe }
          onChange={ this.handleChange }
          required
        ></textarea>
      </label>
    </fieldset>

    <button onClick={ this.printValueState }>Enviar</button>
    <button>Limpar</button>
    </>
    )
  }
}