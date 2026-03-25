import './App.css'
import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [objetos, setObjetos] = useState([{ nome: '', email: '' }]);

  const incrementar = () => {
    setObjetos([...objetos, { nome: nome, email: email }]);
  }
  
  return (
    <div>
      <h1>Formulário Cadastro Simples</h1>
      <input type='text' placeholder='Digite um nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
      <input type='email' placeholder='Digite um email' value={email} onChange={(e) => setEmail(e.target.value)}/>
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