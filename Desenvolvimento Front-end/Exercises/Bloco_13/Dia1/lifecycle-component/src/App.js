import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

 /*FetchJoke de forma assícrona está buscando na API a piada.
 Após buscar a piada na API, com o setState, salva a piada no jokeObj.
 Foi utilizado a lógica de login, colocando todo conteúdo de API dentro de um novo setState, não repetindo o valor anterior do save joke mostrando na interface que está carregando.*/
  async fetchJoke() {
    this.setState(
      {
        loading: true,
      },
      async () => { 
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          jokeObj: requestObject,
          loading: false,
        })
  })
  }
  /*componentDidMount dispara a atualização do estado, Renderizando após o render().*/
  componentDidMount() {
    this.fetchJoke();
  }

  /*Com o saveJoke setamos uma nova piada para dentro do storedJokes.
  O jokeObj armazena a piada, após o click no botao com a propriedade onClick, ativa esta função para chamar a callback que armazena o jokeObj no storedJokes.
  O spread Operator é utilizado para salvar um array de piadas se sobrescrever a piada anterior. */
  saveJoke() {
    //Salvando a piada no array de piadas existentes
    this.setState(({storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }))
    this.fetchJoke();

  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {/*Para facilitar a busca para o React utiliza o map que vai buscar o valor desejado direto na id da API */}
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      <span>RENDERIZAÇÃO CONDICIONAL</span>
      {/*Aqui da para fazer de duas formas:
      jokeObj === undefined ? loadingElent(true) : jokeObj.joke(false)
      No caso, enquanto estado de jokeObj não é atualizado, é undefined, logo, continua true e ele fica na constante loadingElement
      Quando true, ou seja, quando componentDidMount é disparado, ele entra na condição false pois não é mais undefined, e então renderiza. */}

      {/*Da maneira abaixo ele faz o inverso, ou seja, o jokeObj vai ser chamado, como vai dar undefined pois ele vai renderizar antes da API buscar a piada, cai na condição false, então após a API voltar com a informação verdadeira, cai na condição true e renderiza o estado novamente. */}
      
      
      {/*Como exemplo é colocado o botão de salvar piada no lugar do jokeObj.loke no botão abaixo */}
      <p>{loading ? loadingElement /*false*/ : this.renderJokeElement() /*true */}</p>
      

      </div>
    );
  }
}

export default DadJoke;
