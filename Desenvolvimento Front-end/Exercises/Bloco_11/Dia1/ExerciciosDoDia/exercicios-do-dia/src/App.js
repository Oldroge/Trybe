
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskArr = ['Estudar', 'Meditar', 'Alongar', 'Correr', 'ler'];

function App() {
  return (
    <div className="App">
      {Task('Mais uma tarefa')}
      {Task('outra')}
      {taskArr.map((element) => Task(element))}
    </div>
  );
}

export default App;
