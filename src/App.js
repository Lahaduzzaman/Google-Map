import { useState } from 'react';
import './App.css';
import Direction from './components/Direction';


function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  
  return (
    <div className="App">
      <input type="text" placeholder="Starting From" onBlur={e => setOrigin(e.target.value)} />
      <input type="text" placeholder="Going To" onBlur={e => setDestination(e.target.value)} />
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
