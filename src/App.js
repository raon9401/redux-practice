import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number+1);
  }

  return (
    <div className="App">
      <button onClick={increase}>{number}</button>
    </div>
  );
}

export default App;
