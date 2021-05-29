import './App.css';
import Image from './Image';
import Greeting from './Greeting';

function App() {
  return (
    <div>
    <Greeting name='Roge' lastName='Martins' />
    <Image 
    source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
    alternativeText="Gatinho na paisagem"/>
  </div>
  );
}

export default App;
