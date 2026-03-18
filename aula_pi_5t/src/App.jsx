import './App.css'
import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [nomeList, setNomeList] = useState([]);
  
  const incrementar = () => {
    setNomeList([...nomeList, nome]);
  }
  
  return (
    <div>
      <h2>Lista</h2>
      <input type='text' placeholder='Digite um nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
      <button onClick={incrementar}>Adicionar</button>
      <ul>
        {nomeList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;