import './App.css';
import { useState } from 'react';
import SayMyName from './components.js/SayMyName';
import Pessoa from './components.js/Pessoa';
import List from './components.js/List';
import Evento from './components.js/Evento';
import Form from './components.js/Form';
import Condicional from './components.js/Condicional';
import OutraLista from './components.js/OutraLista';
import SeuNome from './components.js/SeuNome';
import Saudacao from './components.js/Saudacao';

function App() {
  const name = "Fernanda";
  const meusItens = ['banana', 'pera', 'mamao']
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <p>Ola {name}</p>
      <SayMyName nome='Fernanda' />
      <SayMyName nome='Matheus' />
      <Pessoa 
        nome='Fernanda' 
        idade='34' 
        profissao='futura dev' 
        foto='https://via.placeholder.com/150' />
      <List />
      <Evento />
      <Form />
      <h1>Renderizacao Condicional</h1>
      <Condicional />
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]}/>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
