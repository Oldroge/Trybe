import React from 'react';
import Album from './Album';
import Data from './data';

function App() {
return (
    <div>
      <Album album={ Data[0] } />
      <Album album={ Data[1] } />
      <Album album={ Data[2] } />
    </div>
  );
}

export default App;
