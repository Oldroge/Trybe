import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
    <div>
      <h1>Hello, {this.props.name}</h1>
      <p>
        Hoje estamos aqui por você, {this.props.name}!
        Você irá entender React de uma vez por todas, sua idade é {this.props.age} anos, seu sobrenome é {this.props.lastname}, está certo?
      </p>
    </div>
    );
  }
}

export default Greeting;

/*Analisando o código acima temos:
1. A declaração de um componente chamado Greeting;
2. O componente Greeting herda da classe Component da biblioteca react;
3. O componente Greenting descreve o que vai ser mostrado para quem usa a aplicação, declarado no método obrigatório render.
Nesse caso, Greeting retorna:  
  <div>
    <h1>Hello, {this.props.name}</h1>
      <p>
        Hoje estamos aqui por você, {this.props.name}!
        Você irá entender React de uma vez por todas, sua idade é {this.props.age} anos, seu sobrenome é {this.props.lastname}, está certo?
      </p>
  </div>
*/
