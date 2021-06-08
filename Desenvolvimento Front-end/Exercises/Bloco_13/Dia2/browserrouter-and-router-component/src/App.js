import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';

import { BrowserRouter, Route } from 'react-router-dom';
/*BrowserRoute e Router são bibliotecas de importação para melhorar o desempenho das rotas na hora de fazer a troca de páginas. */

function App() {
  return (
    <div>
      {/*BrowserRouter é o componente pai, dentro dele irão os componentes filhos nos quais serão roteados dentro da página. */}
      <BrowserRouter>
        {/*O Route pode ser criado como um elemento filho selfclosing */}
        <Route path="/About" component={About} />

        {/*Ou pode ser criado com uma tag também */}
        <Route path="/Contact" ><Contact /></Route>

        {/*O react identifica no Path exatamente o que é passado pra ele e vai renderizar tudo aquilo que estiver de acordo com o requerido, como a / aparece em todos os path.
        Para garantir que só vai ser renderizado caso exato, é usado o atributo exact: */}
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
