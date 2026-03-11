import './App.css'
import Titulo from './components/Titulo'
import BoasVindas from './components/BoasVindas'
import Aluno from './components/Aluno'
import Botao from './components/Botao'
import AlunoCapturar from './components/AlunoCapturar'
import 

function App() {
  function mostrarMensagem() {
    alert('Bem-vindo ao React!')
  }
  
  return (
    <div>
      <BoasVindas />
      <Titulo />
      <Aluno />
      <button onClick={Botao}>Clique aqui</button>
      <input type="text" onChange={AlunoCapturar} placeholder="Digite seu nome aqui..." />
    </div>
  )
}

export default App
