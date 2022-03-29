/*
EXERCÍCIOS:
Nesse exercício, você construirá um componente em React que exibirá os dados pessoais de usuários entregues por uma api.
A api utilizada será a randomuser no endereço https://api.randomuser.me/ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome results . Exemplo:
Ciente disto, após ser montado no DOM, o seu componente deve fazer uma requisição para a api randomuser . Utilize o método componentDidMount .
Enquanto os dados não são entregues, deve ser renderizada uma div com o conteúdo loading...
Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.
Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método shouldComponentUpdate .
Dica! Caso tenham dúvidas sobre como e onde fazer as chamadas de API, esse conteúdo pode ajudar!
*/

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      usersObj: null, 
      loading: true
    }
  }

  async fetchUsers() {
    const api = await fetch('https://api.randomuser.me/');
    const json = await api.json()

    this.setState({
      usersObj: json,
      loading: false
    })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.usersObj.results[0].dob.age > 50) {
      return false
    }
    return true
  }

  render() {
    const { usersObj, loading } = this.state;
    return (
      loading ? <h1>Carregando...</h1> :
      <>
        <img
          src={ usersObj.results[0].picture.large }
          alt={ `${usersObj.results[0].name.first} display` }
        ></img>
        <h1>Name: { usersObj.results[0].name.first }</h1>
        <h4>Email: { usersObj.results[0].email }</h4>
        <h4>Age: { usersObj.results[0].dob.age }</h4>
      </>
    )
  }
}
