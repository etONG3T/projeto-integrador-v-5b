import './App.css'
import React, { useState } from 'react';

function App() {
    const [setNomeList] = useState([]);
    const [nome, setNome] = useState('');
}
  
  return (
    <div>
      <h1>Formulário Cadastro Simples</h1>
      <input type='text' placeholder='Digite um nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
      <button onClick={incrementar}>Adicionar</button>
      <ul>
        {objetos.map((objeto, index) => (
          <li key={index}>
            {objeto.nome} - {objeto.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;