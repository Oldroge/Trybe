import { Component } from "react"
import ComponentePai from "./ComponentePai"

/*Elemento filho retornando para o elemento pai uma array */
class App2 extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

export default App2;
